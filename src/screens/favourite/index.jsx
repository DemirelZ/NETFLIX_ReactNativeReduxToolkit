import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {AppColors} from '../../theme/Colors';
import {fetchFavouriteMovie} from '../../store/actions/favouriteActions';
import FavouriteCard from '../../components/ui/FavouriteCard';
import Loading from '../../components/ui/Loading';
import {useNavigation} from '@react-navigation/native';

const Favourite = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {favourites, loading} = useSelector(state => state.favourites);

  //console.log(favourites);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(fetchFavouriteMovie());
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <View
      style={{backgroundColor: AppColors.BLACK, alignItems: 'center', flex: 1}}>
      <Text style={{color: 'white', fontSize: 34, alignSelf: 'center'}}>
        Your Favourite Movies
      </Text>
      {loading ? (
        <Loading />
      ) : favourites?.length === 0 ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            There are no favourite movies to view
          </Text>
        </View>
      ) : (
        <FlatList
          data={favourites}
          renderItem={({item}) => <FavouriteCard movie={item} />}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
