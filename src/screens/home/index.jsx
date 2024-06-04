import {StyleSheet, FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {screenStyles} from '../../styles/screenStyles';
import Section from '../../components/ui/section';
import widgets from '../../widgets/widgets.json';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovies} from '../../store/actions/movieActions';

const Home = () => {
  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <View style={screenStyles.container}>
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
