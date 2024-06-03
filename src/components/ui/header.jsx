import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppColors} from '../../theme/Colors';
import {height} from '../../utils/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.BLACK,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <View style={{position: 'absolute', left: 5}}>
        <Ionicons name="menu" size={30} color={AppColors.WHITE} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            marginVertical: height * 0.03,
            resizeMode: 'contain',
          }}></Image>
        <View style={{position: 'absolute', right: 5}}>
          <FontAwesome name="search" size={30} color={AppColors.WHITE} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
