import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScene from "../Home/Home";
import MapScene from "../Map/Map";
import SettingsScene from "../Settings/Settings";
import colors from '../../styles/colors';
import { Icon } from 'react-native-vector-icons';
const Tab = createMaterialBottomTabNavigator();

function MainTabsNavigator() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor= {colors.lightblue}
        barStyle={{ backgroundColor: colors.lightblue }}
       
    >
      <Tab.Screen
        name="Home"
        component={HomeScene}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={colors.white} size={24} />
          ),

        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScene}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <Ionicons name="map" color={colors.white} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScene}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={colors.white} size={24} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default MainTabsNavigator;
