import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from './MapStyles';
import {Button, Text} from 'react-native-paper';

const Map = ({navigation}) => {
  const latitude_delta = 0.15;
  const longitude_delta = 0.15;
  const initialRegion = {
    latitude: 43.310062,
    longitude: 5.1945777,
    latitudeDelta: latitude_delta,
    longitudeDelta: longitude_delta,
  };
  const selectedMapType = "standard";
  const [fishData, setFishData] = useState([]);
  // const [initialRegion, setInitialRegion] = useState(initialRegion);
  const [marginBottom, setMargin] = useState(1);
  useEffect(() => {
    //TODO:
    //Fetching from the backend DB
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    const fetchData = await require('../../model/trajectories_nostokes_subset_10000_sample_10_lines.json');
    //  const fetchData = await require('../../model/trajectories_stokes_subset_10000.json');

    setFishData(fetchData);
  };

  return (
    <MapView
      onMapReady={() => { setMargin(marginBottom - 1) }}
      showsUserLocation = { true }
      zoomControlEnabled = { true }
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={[styles.map, { marginBottom: marginBottom}]}
      mapType = { selectedMapType }
      region={initialRegion
      }>
      {fishData.map((fishMarker, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: fishMarker.lat,
              longitude: fishMarker.lon,
            }}
            >
            <Image
              source={require('../../assets/images/fish_marker.png')}
              style={{width: 28, height: 30}}
              resizeMode="contain"
            />
            <Callout tooltip onPress={() => {navigation.navigate('FishDetails', { fishDetails: fishMarker })}}>
              <View style={styles.textContainer}>
                <Text style={styles.obsStyle}>
                  {'Observation ID: ' + fishMarker.obs}
                </Text>
                <Text style={styles.descStyle}>
                  {'Trajectory ID: ' + fishMarker.traj}
                </Text>
                <Text style={styles.timeStyle}>
                  {'Timestamp: ' + fishMarker.time}
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
