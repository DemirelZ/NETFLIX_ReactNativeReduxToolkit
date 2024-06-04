import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {UP_COMING_URL} from '../../service/urls';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await getRequest(UP_COMING_URL);
  return response.data;
});

export {fetchMovies};
