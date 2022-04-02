import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SongPlayer from '../../usecases/SongPlayer';
import CardsBottomNavigation from './CardsBottomNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SongList">
        <Stack.Screen name="SongList" component={CardsBottomNavigation} />
        <Stack.Screen name="SongPlayer" component={SongPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
