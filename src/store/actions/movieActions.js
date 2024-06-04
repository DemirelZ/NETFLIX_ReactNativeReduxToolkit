import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await getRequest(UP_COMING_URL);
  return response.data;
});

export {fetchMovies};
