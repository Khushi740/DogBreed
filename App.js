// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BreedListScreen from './component/BreedListScreen';
import SubBreedListScreen from './component/SubBreedListScreen';
import BreedImagesScreen from './component/BreedImagesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BreedList">
        <Stack.Screen name="BreedList" component={BreedListScreen} />
        <Stack.Screen  name='SubList' component={SubBreedListScreen}/>
        <Stack.Screen name="BreedImages" component={BreedImagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
