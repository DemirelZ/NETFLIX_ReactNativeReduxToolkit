import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import SectionHeader from '../../components/ui/sectionHeader';
import {fetchMoviesWithGenres} from '../../store/actions/movieActions';
import MovieCard from '../../components/ui/movieCard';
import {AppColors} from '../../theme/Colors';
import {fetchFavouriteMovie} from '../../store/actions/favouriteActions';
import FavouriteCard from '../../components/ui/FavouriteCard';

const Favourite = () => {
  const dispatch = useDispatch();

  const {favourites} = useSelector(state => state.favourites);

  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFavouriteMovie());
  }, []);

  return (
    <View style={{backgroundColor: AppColors.BLACK, alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 34, alignSelf: 'center'}}>
        Your Favourite Movies
      </Text>
      <FlatList
        data={favourites}
        renderItem={({item}) => <FavouriteCard movie={item} />}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
