import React from 'react';
import {Image} from 'react-native';
import {Marker} from 'react-native-maps';

const FishMarker = ({fishData}) => {
  return (
    <Marker
      coordinate={{
        latitude: fishData.lat,
        longitude: fishData.lon,
      }}>
      <Image
        source={require('../../assets/images/fish_marker.png')}
        style={{width: 30, height: 30}}
        resizeMode="contain"
      />
    </Marker>
  );
};

export default FishMarker;
