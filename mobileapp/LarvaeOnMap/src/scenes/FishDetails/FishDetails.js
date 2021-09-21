import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './FishDetailsStyle';
import {Text} from 'react-native-paper';

const FishDetails = ({navigation, route}) => {
  const { fishDetails } = route.params;
  //Destructuring
  const { obs, traj, MPA, temp, z, land, time } = fishDetails;

  return (
    <View style={styles.sceneWrapper}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconStyle}
            source={require('../../assets/images/close.png')}
          />
        </TouchableOpacity>
      <View style={styles.bgImageContainer}>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/images/fish_background.png')}
        />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.boxContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>{'Fish Details'}</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              style={styles.fishImgStyle}
              source={require('../../assets/images/fish_detail_image.png')}
            />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.textStyle}>
              {'Observation ID: ' + obs}
            </Text>
            <Text style={styles.textStyle}>
              {'Trajectory ID: ' + traj}
            </Text>
            <Text style={styles.textStyle}>
              {'Marine Protected Area: ' + MPA }
            </Text>
            <Text style={styles.textStyle}>
              {'Temperature: ' + temp}
            </Text>
            <Text style={styles.textStyle}>
              {'Z - Value: ' + z }
            </Text>
            <Text style={styles.textStyle}>
              {'Land: '}
              {
                <Image
                  style={styles.landIconStyle}
                  source={land ? require('../../assets/images/land.png') : require('../../assets/images/noland.png')}
                /> 
              }
            </Text>
            <Text style={ [styles.textStyle, { fontSize: 12 }] }>
              {'Timestamp: ' + time }
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FishDetails;
