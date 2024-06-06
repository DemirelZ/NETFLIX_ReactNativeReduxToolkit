import {createSlice} from '@reduxjs/toolkit';

import {
  fetchGenres,
  fetchMovies,
  fetchMoviesWithGenres,
  fetchTrendingMovies,
} from '../actions/movieActions';

const initialState = {
  movies: [],
  moviesByGenre: {},
  trendingMovies: [],
  genres: [],
  status: null,
  error: null,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
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
      });
  },
});

export default movieSlice.reducer;
