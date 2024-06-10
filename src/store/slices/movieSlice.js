import {createSlice} from '@reduxjs/toolkit';

import {
  fetchGenres,
  fetchMovieDetail,
  fetchMovies,
  fetchMoviesWithGenres,
  fetchTrendingMovies,
  removeDetailData,
  searchMovie,
} from '../actions/movieActions';

const initialState = {
  movies: [],
  //removeDetailData: {},
  movieDetail: {},
  moviesByGenre: {},
  trendingMovies: [],
  searchResult: [],
  genres: [],
  status: null,
  error: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    clearMovieDetail: state => {
      state.movieDetail = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        (state.status = false), (state.movies = action.payload.results);
      })
      .addCase(fetchMovies.rejected, state => {
        (state.status = false), (state.error = false);
      })
      .addCase(fetchTrendingMovies.pending, state => {
        state.status = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        (state.status = false), (state.trendingMovies = action.payload.results);
      })
      .addCase(fetchTrendingMovies.rejected, state => {
        (state.status = false), (state.error = false);
      })
      .addCase(fetchGenres.pending, state => {
        state.status = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        (state.status = false), (state.genres = action.payload.genres);
      })
      .addCase(fetchGenres.rejected, state => {
        (state.status = false), (state.error = false);
      })
      // Handle fetchMoviesWithGenres
      .addCase(fetchMoviesWithGenres.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMoviesWithGenres.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesByGenre[action.payload.genreId] =
          action.payload.movies.results;
      })
      .addCase(fetchMoviesWithGenres.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      //Movie Detail
      .addCase(fetchMovieDetail.pending, state => {
        state.status = true;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.status = false;
        state.movieDetail = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      })
      // Search Movie
      .addCase(searchMovie.pending, state => {
        state.status = 'loading'; // Updated to string value
      })
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Updated to string value
        state.searchResult = action.payload.results;
      })
      .addCase(searchMovie.rejected, (state, action) => {
        state.status = 'failed'; // Updated to string value
        state.error = action.payload.error; // Changed to use payload.error
      })
      // Remove Detail Data
      .addCase(removeDetailData.fulfilled, (state, action) => {
        state.movieDetail = action.payload;
      });
  },
});

export const {clearMovieDetail} = movieSlice.actions;

export default movieSlice.reducer;
