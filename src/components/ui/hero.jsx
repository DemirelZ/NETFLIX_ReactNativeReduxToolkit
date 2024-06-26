import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {width} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTrendingMovies} from '../../store/actions/movieActions';
import TrendMovieCard from './trendMovieCard';

const Hero = () => {
  const dispatch = useDispatch();
  const {trendingMovies} = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={trendingMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <TrendMovieCard item={item}></TrendMovieCard>}
        keyExtractor={item => item.id}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={width}
      />
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {},
});
