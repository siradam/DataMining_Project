import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from './MapStyles';
import {Button, Text} from 'react-native-paper';

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
  const selectedMapType = "standard";
  const [fishData, setFishData] = useState([]);
  // const [initialRegion, setInitialRegion] = useState(initialRegion);

  useEffect(() => {
    //TODO:
    //Fetching from the backend DB
    getData();
    return () => {};
  }, []);

  const getData = () => {
    const fetchData = require('../../model/trajectories_nostokes_subset_10000_sample_10_lines.json');
    setFishData(fetchData);
  };

  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      mapType = { selectedMapType }
      region={initialRegion
      }>
      {fishData.map((marker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.lat,
              longitude: marker.lon,
            }}
            onPress={() => console.log('pressed')}
            
            >
            <Image
              source={require('../../assets/images/fish_marker.png')}
              style={{width: 28, height: 30}}
              resizeMode="contain"
            />
            <Callout tooltip>
              <View style={styles.textContainer}>
                <Text style={styles.obsStyle}>
                    {'Observation ID: ' + marker.obs}
                  </Text>
                  <Text style={styles.descStyle}>
                    {'Trajectory ID: ' + marker.traj}
                  </Text>
                  <Text style={styles.timeStyle}>
                    {'Timestamp: ' + marker.time}
                  </Text>
              </View>
            </Callout>
          </Marker>
        );
      })}
    </MapView>
  );
};

export default Map;
