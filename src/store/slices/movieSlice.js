import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await getRequest(UP_COMING_URL);
  return response.data;
});

const initialState = {
  movies: [],
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
        (state.status = false), (state.movies = action.payload);
      })
      .addCase(fetchMovies.rejected, state => {
        (state.status = false), (state.error = false);
      });
  },
});

export default movieSlice.reducer;
