import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsNavigator from './src/scenes/Tabs/MainTabsNavigator';
import {
  StatusBar
} from "react-native";
function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {true}/>
      <MainTabsNavigator />
    </NavigationContainer>

  );
}

export default App;