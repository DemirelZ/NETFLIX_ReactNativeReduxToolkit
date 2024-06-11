import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {AuthorizationBearerKey, height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIE_DETAIL} from '../../utils/routes';
import Feather from 'react-native-vector-icons/Feather';
import {AppColors} from '../../theme/Colors';
import {deleteFavouriteMovie} from '../../store/actions/favouriteActions';
import {useDispatch} from 'react-redux';

const FavouriteCard = ({movie}) => {
  //console.log(movie);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDeleteFavourite = id => {
    const fav = {
      media_id: movie.id,
      media_type: 'movie',
      favorite: false,
    };

    dispatch(deleteFavouriteMovie(fav));
  };

  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIE_DETAIL, {movieID: movie.id})}
      style={styles.container}>
      <FastImage
        style={{width: width * 0.4, height: height * 0.3}}
        source={{
          uri: `${IMAGE_BASE_URL}${movie?.poster_path}`,
          headers: {Authorization: `Bearer ${AuthorizationBearerKey}`},
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={{color: 'white', textAlign: 'center'}}>{movie?.title}</Text>
      <TouchableOpacity onPress={() => handleDeleteFavourite(movie.id)}>
        <Feather name="x-circle" size={34} color={AppColors.WHITE} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default FavouriteCard;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    borderWidth: 2,
    borderColor: '#aaaaaa',
    borderRadius: 10,
  },
});
