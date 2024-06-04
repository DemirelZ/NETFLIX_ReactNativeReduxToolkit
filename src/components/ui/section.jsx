import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionHeader from './sectionHeader';
import {useSelector} from 'react-redux';

const Section = props => {
  const {item} = props;
  const {movies} = useSelector(state => state.movie);
  console.log(movies);

  return (
    <View style={{marginVertical: 40}}>
      <SectionHeader title={item.title} />
      <FlatList
        data={movies}
        horizontal
        renderItem={({item}) => (
          <Text style={{color: 'white'}}>{item.title}</Text>
        )}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
