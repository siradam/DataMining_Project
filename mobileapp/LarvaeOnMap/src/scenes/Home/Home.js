import React from 'react';
import {View, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './HomeStyles';
import { Button, Text } from 'react-native-paper';
import colors from "../../styles/colors";

const Home = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
      <View style={styles.homeWrapper}>
        
        <View style={styles.headlineWrapper}>
          <Text style={styles.titleText}>{'LarvaeLy'}</Text>
        </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.imgStyle}
              source={require('../../assets/images/home_fish.png')}
            />
          </View>

          <View style={styles.textWrapper}>
            <Text style={styles.textStyle} numberOfLines={16} >
              {'This is 2x 10.000 example trajectories from biophysical experiments performed with Parcels.'}
              {'\n\nThe trajectories are a tiny subset of a much bigger collection of trajectories that have been simulated with the aim of learning about the fate of larvae of different species of fish.'}
              {'\n\nThe trajectories are taken from two classes of biophysical simulations which differ in the physical processes they take into account when estimating horizontal movement of the larvae at the surface.'}
            </Text>
          </View>

          <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Map')} >
            <Image
              style={[styles.imgStyle, {height: 180}]}
              source={require('../../assets/images/home_map.png')}
            />
          </TouchableOpacity>

          <View style={[styles.textWrapper, {height: 130}]}>
            <Text style={styles.textStyle} numberOfLines={8} >
              {'One experiment only took into account ocean currents from a state estimate of the true ocean circulation in the Mediterranean Sea. The other experiment took into account ocean currents and the horizontal movement due to Stokes Drift which was estimated based on a wave state estimate for the Mediterranean Sea.'}
            </Text>
          </View>

          {/* TODO -> A small video */}

          <View style={{alignItems: 'center', marginVertical: 15}}>
            <Button 
              color = {colors.blue}
              icon="map"
              mode="contained"
              style= {styles.buttonStyle}
              onPress={() => navigation.navigate('Map')}>
                Go to Map
            </Button>
          </View>
      </View>
    </ScrollView>
  );
};

export default Home;
