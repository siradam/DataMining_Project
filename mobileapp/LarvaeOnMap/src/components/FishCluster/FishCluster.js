import React from 'react';
import {View, Text} from 'react-native';
import styles from './FishClusterStyles';
import {Marker} from 'react-native-maps';

const FishCluster = ({cluster, onPress}) => {
  const count = cluster.pointCount;
  const coordinate = cluster.coordinate;
  const cId = cluster.clusterId;
  return (
    <Marker
      coordinate={coordinate}
      key={cId}
      onPress={onPress}>
      <View style={styles.clusterBox}>
        <View style={styles.counterBox}>
          <Text style={styles.countStyle}>{count}</Text>
        </View>
      </View>
    </Marker>
  );
};

export default FishCluster;
