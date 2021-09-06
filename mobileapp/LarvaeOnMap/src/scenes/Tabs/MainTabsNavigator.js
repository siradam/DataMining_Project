import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScene from '../Home/Home';
import MapScene from '../Map/Map';
import FishDetails from '../FishDetails/FishDetails';
import SettingsScene from '../Settings/Settings';

import colors from '../../styles/colors';

const MapStack = createStackNavigator();
function MapStackScene() {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MapStack.Screen name="MapScene" component={MapScene} />
      <MapStack.Screen name="FishDetails" component={FishDetails} />
    </MapStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MainTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor={colors.lightblue}
      barStyle={{backgroundColor: colors.lightblue}}
      style={{marginTop: 20}}>
      <Tab.Screen
        name="Home"
        component={HomeScene}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home"
              color={colors.white}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapStackScene}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <Ionicons name="map" color={colors.white} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScene}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Ionicons name="settings" color={colors.white} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabsNavigator;
