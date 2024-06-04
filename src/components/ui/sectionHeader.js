import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {MOVIELIST} from '../../utils/routes';

const SectionHeader = props => {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(MOVIELIST)}>
        <Text style={[styles.title, styles.seeAll]}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: AppColors.WHITE,
  },
  seeAll: {
    color: AppColors.YELLOW,
  },
});
