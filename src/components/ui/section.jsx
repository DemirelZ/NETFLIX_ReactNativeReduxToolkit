import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import widgets from '../../widgets/widgets.json';
import SectionHeader from './sectionHeader';

const Section = props => {
  const {item} = props;
  return (
    <View style={{backgroundColor: 'red', marginVertical: 20}}>
      <FlatList
        data={widgets}
        renderItem={({item}) => <SectionHeader title={item.title} />}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
