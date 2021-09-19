import React, {useState} from 'react';
import {Image} from 'react-native';
import styles from './NormalMapViewStyles';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import FishCard from '../FishCard/FishCard';

const NormalMapView = ({fishData, navigation, initialRegion}) => {

  const [marginBottom, setMargin] = useState(1);
  const selectedMapType = 'standard';

  return (
    <MapView
      onMapReady={() => {
        setMargin(marginBottom - 1);
      }}
      showsUserLocation={true}
      zoomControlEnabled={true}
      provider={PROVIDER_GOOGLE}
      style={[styles.map, {marginBottom: marginBottom}]}
      mapType={selectedMapType}
      region={initialRegion}>
      {fishData.map((fishMarker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: fishMarker.lat,
              longitude: fishMarker.lon,
            }}>
            <Image
              source={require('../../assets/images/fish_marker.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
            
            <FishCard fishData = {fishMarker} navigation = {navigation} />
          </Marker>
        );
      })}
    </MapView>
  );
};

export default NormalMapView;
