import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BreedListScreen from './component/BreedListScreen';
import SubBreedListScreen from './component/SubBreedListScreen';
import BreedImagesScreen from './component/BreedImagesScreen';
import ContactPage from './component/ContactPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BreedStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BreedList"
      component={BreedListScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SubList"
      component={SubBreedListScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <FontAwesome5.Button
            name="arrow-left"
            backgroundColor="transparent"
            color="#841584"
            onPress={() => navigation.goBack()}
          />
        ),
        headerTitle: 'Sub Breed List',
        headerTitleStyle: { color: '#841584' },
        headerStyle: { backgroundColor: '#ffffff' },
      })}
    />
    <Stack.Screen
      name="BreedImages"
      component={BreedImagesScreen}
      options={({ navigation }) => ({
        headerLeft: () => (
          <FontAwesome5.Button
            name="arrow-left"
            backgroundColor="transparent"
            color="#841584"
            onPress={() => navigation.goBack()}
          />
        ),
        headerTitle: '',
        headerStyle: { backgroundColor: '#ffffff' },
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: '#ffffff' },
          activeTintColor: '#841584',
          inactiveTintColor: '#666666',
        }}
      >
        <Tab.Screen
          name="Breeds"
          component={BreedStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="dog" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactPage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="contact-page" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
