import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenStyles} from '../../styles/screenStyles';
import {AppColors} from '../../theme/Colors';

const Loading = () => {
  return (
    <View
      style={[
        screenStyles.container,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <ActivityIndicator size={'large'} color={AppColors.WHITE} />
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({});
