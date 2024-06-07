import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIELIST, MOVIE_DETAIL, TAB} from '../utils/routes';
import TabNavigation from './tabNavigation';
import MovieList from '../screens/movieList';
import Header from '../components/ui/header';
import MovieDetail from '../components/ui/movieDetail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigation}
      />
      <Stack.Screen
        options={{header: () => <Header />}}
        name={MOVIELIST}
        component={MovieList}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Back',
        }}
        name={MOVIE_DETAIL}
        component={MovieDetail}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
