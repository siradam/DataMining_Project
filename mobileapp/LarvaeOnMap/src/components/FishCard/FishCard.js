import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './FishCardStyles';
import {Callout} from 'react-native-maps';

const FishCard = ({fishData, navigation}) => {
  return (
    <Callout
      tooltip
      onPress={e => {
        e.stopPropagation();
        navigation.navigate('FishDetails', {fishDetails: fishData});
      }}>
      <View style={styles.textContainer}>
        <Text style={styles.obsStyle}>{'Observation ID: ' + fishData.obs}</Text>
        <Text style={styles.descStyle}>
          {'Trajectory ID: ' + fishData.traj}
        </Text>
        <Text style={styles.timeStyle}>{'Timestamp: ' + fishData.time}</Text>
      </View>
    </Callout>
  );
};

export default FishCard;
