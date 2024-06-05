import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {TRENDING_MOVIES, UP_COMING_URL} from '../../service/urls';

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

export {fetchMovies, fetchTrendingMovies};
