import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';
import {Add, InfoCircle, Play} from 'iconsax-react-native';

const TrendMovieCard = ({item}) => {
  return (
    <View
      style={{
        width: width,
        height: height * 0.25,
      }}>
      <FastImage
        style={{
          width: width,
          height: height * 0.2,
          justifyContent: 'center',
        }}
        source={{
          uri: `${IMAGE_BASE_URL}${item.backdrop_path}`,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            paddingLeft: 10,
          }}>
          {item.title}
        </Text>
      </FastImage>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Add size={30} color="white" />
          <Text style={{color: 'white'}}>My List</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: '#a6a6a6',
              paddingVertical: height * 0.006,
              paddingHorizontal: width * 0.1,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Play size={30} color="white" />
            <Text style={{color: 'white', fontWeight: '800'}}>Play</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <InfoCircle size={30} color="white" />
          <Text style={{color: 'white'}}>info</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendMovieCard;

const styles = StyleSheet.create({});
