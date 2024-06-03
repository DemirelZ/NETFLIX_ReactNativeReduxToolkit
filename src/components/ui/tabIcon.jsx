import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {Heart, Home2} from 'iconsax-react-native';
import {FAVOURITES, HOME} from '../../utils/routes';

const TabIcon = ({name, size, color, focused}) => {
  size = 34;

  if (name === HOME) {
    return <Home2 size={focused ? size : 28} color={color} variant="Bold" />;
  } else if (name === FAVOURITES) {
    return <Heart size={focused ? size : 28} color={color} variant="Bold" />;
  }
  return null; // Ekstra bir güvenlik için, eğer name eşleşmezse null döner
};

export default TabIcon;

const styles = StyleSheet.create({});
