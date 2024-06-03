import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppColors} from '../../theme/Colors';
import {height} from '../../utils/constants';
import {SearchFavorite, SearchNormal1} from 'iconsax-react-native';

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',

        alignItems: 'center',
        backgroundColor: AppColors.BLACK,
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
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
        <SearchNormal1
          size={34}
          color={AppColors.WHITE}
          style={{position: 'absolute', right: 5}}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
