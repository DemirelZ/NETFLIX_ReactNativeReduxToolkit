/*

import {StyleSheet, FlatList, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {screenStyles} from '../../styles/screenStyles';
import Section from '../../components/ui/section';
import widgets from '../../widgets/widgets.json';
import {useDispatch} from 'react-redux';
import {fetchMovies} from '../../store/actions/movieActions';
import Hero from '../../components/ui/hero';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <View style={screenStyles.container}>
      <FlatList
        ListHeaderComponent={<Hero />}
        data={widgets}
        renderItem={({item}) => <Section item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

*/

import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {screenStyles} from '../../styles/screenStyles';
import Section from '../../components/ui/section';
import {useDispatch, useSelector} from 'react-redux';
import {fetchGenres} from '../../store/actions/movieActions';
import Hero from '../../components/ui/hero';

const Home = () => {
  const {genres, searchResult} = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    console.log(searchResult);
  }, []);

  //console.log(genres);

  return (
    <View style={screenStyles.container}>
      <FlatList
        ListHeaderComponent={<Hero />}
        data={genres}
        renderItem={({item}) => <MemoizedSection item={item} />}
      />
    </View>
  );
};

export default Home;

const MemoizedSection = React.memo(Section);

const styles = StyleSheet.create({});
