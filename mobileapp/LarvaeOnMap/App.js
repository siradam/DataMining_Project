import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsNavigator from './src/scenes/Tabs/MainTabsNavigator';
import SplashScreen from 'react-native-splash-screen';

import {
  StatusBar
} from "react-native";

const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {true}/>
      <MainTabsNavigator />
    </NavigationContainer>

  );
}

export default App;