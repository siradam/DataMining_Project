import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './FishDetailsStyle';
import {Button, Text} from 'react-native-paper';
import colors from '../../styles/colors';

const FishDetails = ({navigation, fish}) => {
  console.log("FishDetails")
  return (
    <View style={styles.sceneWrapper}>
        <TouchableOpacity style={styles.closeIcon} onPress={() => console.log("cLose presssed")}>
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
              {'Observation ID: ' }
            </Text>
            <Text style={styles.textStyle}>
              {'Trajectory ID: ' }
            </Text>
            <Text style={styles.textStyle}>
              {'Marine Protected Area: ' }
            </Text>
            <Text style={styles.textStyle}>
              {'Temperature: ' }
            </Text>
            <Text style={styles.textStyle}>
              {'Z - Value: ' }
            </Text>
            <Text style={styles.textStyle}>
              {'Land: ' }
            </Text>
            <Text style={ [styles.textStyle, { fontSize: 12, fontFamily: "ComicSans-Italic"}] }>
              {'Timestamp: '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FishDetails;
