import React, {useEffect, useState} from 'react';
import {View, Image, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import styles from './MapStyles';
import {Button, Text} from 'react-native-paper';
import ClusteredMapView from 'react-native-maps-super-cluster';
import FishCluster from '../../components/FishCluster/FishCluster';
import FishMarker from '../../components/FishMarker/FishMarker';
import NormalMapView from '../../components/NormalMapView/NormalMapView';
import {Switch} from 'react-native-paper';
import colors from '../../styles/colors';

const Map = ({navigation}) => {
  const latitude_delta = 0.15;
  const longitude_delta = 0.15;
  const initialRegion = {
    latitude: 43.310062,
    longitude: 5.1945777,
    latitudeDelta: latitude_delta,
    longitudeDelta: longitude_delta,
  };
  const selectedMapType = 'standard';
  const fishData = require('../../model/trajectories_nostokes_subset_10000_sample_10_lines.json');
  const [clusteredMap, setValue] = useState(false);
  const [marginBottom, setMargin] = useState(1);

  // const [fishData, setFishData] = useState([]);
  // const [initialRegion, setInitialRegion] = useState(initialRegion);

  // useEffect(() => {
  //   //TODO:
  //   //Fetching from the backend DB
  //   getData();
  // }, []);

  // const getData = async () => {
  //   const fetchData = await require('../../model/trajectories_nostokes_subset_10000_sample_10_lines.json');
  //   const fetchData = await require('../../model/trajectories_stokes_subset_10000.json');
  //   setFishData(fetchData);
  // };

  renderCluster = (cluster, onPress) => {
    return <FishCluster cluster={cluster} onPress={onPress} />;
  };

  renderMarker = data => (
    <FishMarker
      key={Math.random() + '_' + Date.now()}
      identifier={Math.random() + '_' + Date.now()}
      fishData={data}
    />
  );

  const clusterData = fishData.map(d => {
    d.location = {
      latitude: d.lat,
      longitude: d.lon,
    };
    (d.latitude = d.lat), (d.longitude = d.lon);
    return d;
  });

  console.log('clusterData ', clusterData.length);
  return (
    <View style={{flex: 1}}>
      {clusteredMap ? (
        <ClusteredMapView
          onMapReady={() => {
            setMargin(marginBottom - 1);
          }}
          mapType={selectedMapType}
          showsUserLocation={true}
          zoomControlEnabled={true}
          style={{flex: 1}}
          data={clusterData}
          initialRegion={initialRegion}
          renderCluster={this.renderCluster}
          renderMarker={this.renderMarker}
          ref={r => {
            this.map = r;
          }}
        />
      ) : (
        <NormalMapView
          fishData={fishData}
          navigation={navigation}
          initialRegion={initialRegion}
        />
      )}

      <Switch
        style={styles.switchStyle}
        value={clusteredMap}
        onValueChange={() => {
          setValue(!clusteredMap);
        }}
        color={colors.blue}
      />
    </View>
  );
};

export default Map;
