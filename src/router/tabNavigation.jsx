import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FAVOURITES, HOME} from '../utils/routes';
import Home from '../screens/home';
import Favourite from '../screens/favourite';
import {AppColors} from '../theme/Colors';
import TabIcon from '../components/ui/tabIcon';
import Header from '../components/ui/header';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          return (
            <TabIcon
              size={size}
              focused={focused}
              color={color}
              iconName={route?.name}
              route={route}
            />
          );
        },

        header: () => <Header />,
        tabBarActiveTintColor: AppColors.WHITE,
        tabBarInactiveTintColor: AppColors.GREY,
        tabBarStyle: {
          backgroundColor: AppColors.BLACK,
        },
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVOURITES} component={Favourite} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
