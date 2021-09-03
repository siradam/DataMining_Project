import React, { useEffect, useState } from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from './MapStyles';

const Map = () => {
  const {width, height} = Dimensions.get('window');

  const aspectRatio = width / height;
  const latitude_delta = 0.15;
  const longitude_delta = latitude_delta * aspectRatio;
  const initialRegion = {
    latitude: 43.310062,
    longitude: 5.1945777,
    latitudeDelta: latitude_delta,
    longitudeDelta: longitude_delta,
  };

  const [fishData, setFishData] = useState([]);
  // const [initialRegion, setInitialRegion] = useState(initialRegion);
  
  useEffect(() => {
    //TODO:
    //Fetching from the backend DB
    getData();
    return () => {}
  }, [])
  
  
  const getData = () => {
    const fetchData = require('../../model/trajectories_nostokes_subset_10000_sample_10_lines.json');
    setFishData(fetchData);
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={initialRegion}>
      {fishData.map((marker, index) => {
        
        return (
          <Marker 
            key={index} 
            coordinate={{
              latitude: marker.lat,
              longitude: marker.lon,
            }} 
            onPress={()=> console.log("pressed")}
          >
          <Image
            source={require('../../assets/images/fish_marker.png')}
            style={{width: 28, height: 30}}
            resizeMode="contain"
          />
          </Marker>
          
        );
      })}
    </MapView>
  );
};

export default Map;
