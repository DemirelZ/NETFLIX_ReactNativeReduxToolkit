import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SectionHeader from './sectionHeader';
import {useSelector} from 'react-redux';
import MovieCard from './movieCard';

const Section = props => {
  const {item} = props;
  const {movies} = useSelector(state => state.movie);

  return (
    <View style={{marginVertical: 10}}>
      <SectionHeader title={item.title} />
      <FlatList
        data={movies}
        horizontal
        renderItem={({item}) => <MovieCard movie={item} />}
      />
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
