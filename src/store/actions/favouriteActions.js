import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../service/verbs';
import {ACCOUNT_URL, FAVOURITE_URL, FAV_MOVIES_URL} from '../../service/urls';
import {ACCOUNT_ID} from '../../utils/constants';

const addFavouriteMovie = createAsyncThunk(
  'favourites/addFavouriteMovie',
  async FavMovie => {
    const response = await postRequest(
      `${ACCOUNT_URL}${ACCOUNT_ID}${FAVOURITE_URL}`,
      FavMovie,
    );
    return response.data;
  },
);

const deleteFavouriteMovie = createAsyncThunk(
  'favourites/deleteFavouriteMovie',
  async FavMovie => {
    const response = await postRequest(
      `${ACCOUNT_URL}${ACCOUNT_ID}${FAVOURITE_URL}`,
      FavMovie,
    );
    // console.log('response.data', FavMovie.media_id);
    return FavMovie.media_id;
  },
);

const fetchFavouriteMovie = createAsyncThunk(
  'favourites/fetchFavouriteMovie',
  async () => {
    const response = await getRequest(
      `${ACCOUNT_URL}${ACCOUNT_ID}${FAVOURITE_URL}${FAV_MOVIES_URL}`,
    );
    return response.data.results;
  },
);

export {addFavouriteMovie, fetchFavouriteMovie, deleteFavouriteMovie};
