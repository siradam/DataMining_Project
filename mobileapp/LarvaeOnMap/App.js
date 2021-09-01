import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsNavigator from './src/scenes/Tabs/MainTabsNavigator';

function App() {
  return (
    <NavigationContainer>
      <MainTabsNavigator />
    </NavigationContainer>

  );
}

export default App;