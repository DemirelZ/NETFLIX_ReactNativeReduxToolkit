import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import favouriteReducer from './slices/favouriteSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    favourites: favouriteReducer,
  },
});
