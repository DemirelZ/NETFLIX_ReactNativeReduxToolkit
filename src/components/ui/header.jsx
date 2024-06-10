import {
  Image,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppColors} from '../../theme/Colors';
import {height} from '../../utils/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {searchMovie} from '../../store/actions/movieActions';

const Header = () => {
  const insets = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const dispatch = useDispatch();
  const [opacityAnimation] = useState(new Animated.Value(0));

  const searchBarVisibilty = () => {
    setIsSearch(!isSearch);
    Animated.timing(opacityAnimation, {
      toValue: isSearch ? 0 : 1, // Hedef opaklık değeri (0 veya 1)
      duration: 1000, // Animasyon süresi (ms)
      useNativeDriver: true, // Performans için native driver kullan
    }).start(); // Animasyonu başlat
  };

  // const animatedStyle = {
  //   opacity: opacityAnimation, // Opaklık değeri animasyonu
  // };

  const animatedStyle = {
    opacity: opacityAnimation,
    transform: [
      {
        translateY: opacityAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0], // Görünürlük durumuna bağlı olarak -20'den 0'a animasyonlu bir yukarı kaydırma
        }),
      },
    ],
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: AppColors.BLACK,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: AppColors.BLACK,
          }}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={{
              marginVertical: height * 0.01,
              resizeMode: 'contain',
            }}></Image>
          <View style={{position: 'absolute', left: 5}}>
            <Ionicons name="menu" size={34} color={AppColors.WHITE} />
          </View>
          <TouchableOpacity
            onPress={searchBarVisibilty}
            style={{position: 'absolute', right: 10}}>
            <Ionicons
              name={isSearch ? 'search-circle' : 'search-circle-outline'}
              size={42}
              color={AppColors.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View
        style={[{backgroundColor: AppColors.BLACK}, animatedStyle]}>
        {isSearch && (
          <>
            <TextInput
              style={styles.searchInput}
              placeholder="Search movie..."
              placeholderTextColor="white"
              selectionColor="white"
              value={searchTerm}
              onChangeText={text => setSearchTerm(text)}
            />
            {/* <Button
              onPress={() => dispatch(searchMovie(searchTerm))}
              title="search"
            /> */}
          </>
        )}
      </Animated.View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: AppColors.BLACK, // Arka plan rengi
    color: 'white', // Metin rengi
    borderWidth: 1,
    borderColor: 'white', // Çerçeve rengi
    fontSize: 20,
  },
});
