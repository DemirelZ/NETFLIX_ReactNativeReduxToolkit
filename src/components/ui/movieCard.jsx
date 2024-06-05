import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {AuthorizationBearerKey, height, width} from '../../utils/constants';

const MovieCard = ({movie}) => {
  //console.log(movie);
  return (
    <View style={styles.container}>
      <FastImage
        style={{width: width * 0.35, height: height * 0.25}}
        source={{
          uri: `${IMAGE_BASE_URL}${movie.poster_path}`,
          headers: {Authorization: `Bearer ${AuthorizationBearerKey}`},
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={{color: 'white', textAlign: 'center'}}>{movie.title}</Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.37,
  },
});
