import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SectionHeader from './sectionHeader';
import {useDispatch, useSelector} from 'react-redux';
import MovieCard from './movieCard';
import {fetchMoviesWithGenres} from '../../store/actions/movieActions';

const Section = props => {
  const dispatch = useDispatch();
  const {item} = props;
  const moviesByGenre = useSelector(state => state.movie.moviesByGenre);
  const movies = moviesByGenre[item.id] || [];

  useEffect(() => {
    dispatch(fetchMoviesWithGenres(item.id));
  }, [dispatch, item.id]);

  return (
    <View style={{marginVertical: 10}}>
      <SectionHeader title={item.name} />
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
