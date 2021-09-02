import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from './MapStyles';

const Map = () => {
  const {width, height} = Dimensions.get('window');

  const aspectRatio = width / height;

  const latitude_delta = 0.1922;
  const longitude_delta = latitude_delta * aspectRatio;

  return (
    // <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 54.355451258631,
        longitude: 10.118800735507897,
        latitudeDelta: latitude_delta,
        longitudeDelta: longitude_delta,
      }}
      ></MapView>
    // </View>
  );
};

export default Map;
