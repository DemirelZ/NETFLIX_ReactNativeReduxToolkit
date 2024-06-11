import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {screenStyles} from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchMovieDetail,
  removeDetailData,
} from '../../store/actions/movieActions';
import {AuthorizationBearerKey, height, width} from '../../utils/constants';
import {IMAGE_BASE_URL} from '../../service/urls';
import Loading from '../../components/ui/Loading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppColors} from '../../theme/Colors';
import {addFavouriteMovie} from '../../store/actions/favouriteActions';

const MovieDetail = ({route}) => {
  const {movieID} = route?.params;
  //console.log(movieID);
  const dispatch = useDispatch();
  const {movieDetail, status} = useSelector(state => state.movie);
  //console.log(movieDetail);

  useEffect(() => {
    dispatch(fetchMovieDetail(movieID));

    return () => {
      dispatch(removeDetailData());
    };
  }, [movieID, dispatch]);

  const handleAddFavourite = id => {
    const fav = {
      media_id: id,
      media_type: 'movie',
      favorite: true,
    };

    dispatch(addFavouriteMovie(fav));
  };

  return (
    <>
      <ScrollView style={screenStyles.container}>
        {status ? (
          <Loading />
        ) : (
          <View>
            <Text
              style={{
                color: 'white',
                paddingVertical: 20,
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
              }}>
              {movieDetail?.title}
            </Text>

            <View>
              <Image
                style={{width: width, height: height * 0.3}}
                source={{
                  uri: `${IMAGE_BASE_URL}${movieDetail?.backdrop_path}`,
                  headers: {Authorization: `Bearer ${AuthorizationBearerKey}`},
                }}></Image>
              <TouchableOpacity
                onPress={() => handleAddFavourite(movieID)}
                style={{position: 'absolute', left: 10, top: 10}}>
                <Ionicons name={'heart'} size={36} color={AppColors.WHITE} />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                  flexDirection: 'row',
                  backgroundColor: '#f5c517',

                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  IMDB:
                </Text>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 20,

                    fontWeight: 'bold',
                  }}>
                  {movieDetail?.vote_average?.toFixed(1)}
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  color: 'white',
                  paddingVertical: 20,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '300',
                }}>
                {movieDetail?.overview}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Release Date:
                </Text>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  {movieDetail?.release_date}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Budgets:
                </Text>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  {movieDetail?.budget}$
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  Revenue:
                </Text>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    fontSize: 22,
                    fontWeight: '300',
                  }}>
                  {movieDetail?.revenue}$
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({});
