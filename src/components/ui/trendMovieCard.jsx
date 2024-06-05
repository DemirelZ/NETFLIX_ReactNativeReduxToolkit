import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height} from '../../utils/constants';

const TrendMovieCard = ({item}) => {
  return (
    <View>
      <FastImage
        style={{width: 50, height: height * 0.2}}
        source={{
          uri: `${IMAGE_BASE_URL}${item.backdrop_path}`,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default TrendMovieCard;

const styles = StyleSheet.create({});
