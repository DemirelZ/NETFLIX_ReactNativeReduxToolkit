import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MOVIELIST, MOVIE_DETAIL, NOTIFICATION, TAB} from '../utils/routes';
import TabNavigation from './tabNavigation';
import MovieList from '../screens/movieList';
import Header from '../components/ui/header';
import MovieDetail from '../screens/movieList/movieDetail';
import Notification from '../screens/notification';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: props => <Header {...props} />,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigation}
      />
      <Stack.Screen name={MOVIELIST} component={MovieList} />
      <Stack.Screen
        options={{
          headerBackTitle: 'Back',

          headerStyle: {
            backgroundColor: 'black',
          },
        }}
        name={MOVIE_DETAIL}
        component={MovieDetail}
      />
      <Stack.Screen name={NOTIFICATION} component={Notification} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
