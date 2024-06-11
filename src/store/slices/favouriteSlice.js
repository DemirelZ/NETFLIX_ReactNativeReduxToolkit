import {createSlice} from '@reduxjs/toolkit';
import {
  addFavouriteMovie,
  fetchFavouriteMovie,
} from '../actions/favouriteActions';

const initialState = {
  favourites: null,
  loading: false,
  error: false,
};

const FavouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addFavouriteMovie.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addFavouriteMovie.fulfilled, (state, action) => {
        state.loading = false;
        //(state.favourites = [...state.favourites, action.payload]);
      })
      .addCase(addFavouriteMovie.rejected, (state, action) => {
        (state.loading = false), (state.error = true);
      })
      //fetch
      .addCase(fetchFavouriteMovie.pending, (state, action) => {
        // state.loading = true;
      })
      .addCase(fetchFavouriteMovie.fulfilled, (state, action) => {
        (state.loading = false), (state.favourites = action.payload);
      })
      .addCase(fetchFavouriteMovie.rejected, (state, action) => {
        (state.loading = false), (state.error = true);
      });
  },
});

export default FavouriteSlice.reducer;
