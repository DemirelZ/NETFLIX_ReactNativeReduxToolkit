import {StyleSheet, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {FAVOURITES, HOME} from '../../utils/routes';

const TabIcon = ({iconName, size, color, focused}) => {
  size = 34;

  if (iconName === HOME) {
    return <AntDesign name="home" size={focused ? size : 28} color={color} />;
  } else if (iconName === FAVOURITES) {
    return <Feather name="heart" size={focused ? size : 28} color={color} />;
  }
  return null; // Ekstra bir güvenlik için, eğer name eşleşmezse null döner
};

export default TabIcon;

const styles = StyleSheet.create({});
