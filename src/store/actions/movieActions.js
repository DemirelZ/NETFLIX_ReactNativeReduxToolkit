import {asyncThunkCreator, createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  GENRES_URL,
  MOVIESWITHGENRES_URL,
  SEARCH_URL,
  TRENDING_MOVIES,
  UP_COMING_URL,
} from '../../service/urls';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await getRequest(UP_COMING_URL);
  return response.data;
});

const fetchTrendingMovies = createAsyncThunk(
  'movies/fetchTrendingMovies',
  async () => {
    const response = await getRequest(TRENDING_MOVIES);
    return response.data;
  },
);

const fetchMovieDetail = createAsyncThunk(
  'movie/fetchMovieDetail',
  async movie_id => {
    const response = await getRequest(`/movie/${movie_id}`);
    return response.data;
  },
);

//DENEME ÇALIŞMALARI
const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const response = await getRequest(GENRES_URL);
  return response.data;
});

const fetchMoviesWithGenres = createAsyncThunk(
  'movies/fetchMoviesWithGenres',
  async id => {
    const response = await getRequest(`${MOVIESWITHGENRES_URL}${id}`);
    return {genreId: id, movies: response.data};
  },
);

const searchMovie = createAsyncThunk('movies/searchMovie', async searchItem => {
  try {
    const response = await getRequest(`${SEARCH_URL}${searchItem}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({error: error.message});
  }
});

export {
  fetchMovies,
  fetchTrendingMovies,
  fetchGenres,
  fetchMoviesWithGenres,
  fetchMovieDetail,
  searchMovie,
};
