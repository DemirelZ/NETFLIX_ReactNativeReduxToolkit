import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';
import {Add, InfoCircle, Play} from 'iconsax-react-native';

const TrendMovieCard = ({item}) => {
  const [isOverView, setIsOverView] = useState(false);

  const showDescription = () => {
    setIsOverView(!isOverView);
  };

  return (
    <View
      style={{
        width: width,
        height: height * 0.25,
      }}>
      <FastImage
        style={[
          {
            width: width,
            height: height * 0.2,
            justifyContent: 'center',
          },
        ]}
        source={{
          uri: `${IMAGE_BASE_URL}${item.backdrop_path}`,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}>
        {isOverView ? (
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>{item.title}</Text>
              <Text style={styles.text}>{item.overview}</Text>
            </View>
          </View>
        ) : (
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
              paddingLeft: 10,
            }}>
            {item.title}
          </Text>
        )}
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
          <TouchableOpacity onPress={() => showDescription()}>
            <InfoCircle size={30} color="white" />
            <Text style={{color: 'white'}}>info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TrendMovieCard;

const styles = StyleSheet.create({
  title: {},
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // Siyah renk ve %50 opaklık
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    maxWidth: '90%',
    padding: 10,
    marginHorizontal: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.7)', // Beyaz arka plan ve %70 opaklık
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
});
