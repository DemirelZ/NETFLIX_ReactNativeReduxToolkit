import {createSlice} from '@reduxjs/toolkit';

import {fetchMovies} from '../actions/movieActions';

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
        (state.status = false), (state.movies = action.payload.results);
      })
      .addCase(fetchMovies.rejected, state => {
        (state.status = false), (state.error = false);
      });
  },
});

export default movieSlice.reducer;
