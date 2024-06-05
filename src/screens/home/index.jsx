import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
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
      <Hero />
      <FlatList
        data={widgets}
        renderItem={({item}) => <Section item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
