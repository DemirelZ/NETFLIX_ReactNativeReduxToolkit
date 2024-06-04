import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenStyles} from '../../styles/screenStyles';
import Section from '../../components/ui/section';

const Home = () => {
  return (
    <View style={screenStyles.container}>
      <Section />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
