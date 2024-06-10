import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import SectionHeader from '../../components/ui/sectionHeader';
import {fetchMoviesWithGenres} from '../../store/actions/movieActions';
import MovieCard from '../../components/ui/movieCard';
import {AppColors} from '../../theme/Colors';

const MovieList = ({route}) => {
  const dispatch = useDispatch();
  const {genre} = route?.params;
  //console.log(genre);

  const moviesByGenre = useSelector(state => state.movie.moviesByGenre);
  //const movies = moviesByGenre[item.id] || [];

  const movies = useMemo(
    () => moviesByGenre[genre.id] || [],
    [moviesByGenre, genre.id],
  );

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMoviesWithGenres(genre.id));
    }
  }, [dispatch, genre.id, movies.length]);

  return (
    <View style={{backgroundColor: AppColors.BLACK, alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 40, alignSelf: 'center'}}>
        {genre.name} Movies
      </Text>
      <FlatList
        data={movies}
        numColumns={2}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({});
