import * as React from 'react';
import { StyleSheet, Text, View, Button, TabBarIOS, Settings } from 'react-native';
import Home from "./components/Home";
import collections from "./components/collections";
import settings from "./components/settings";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default class App extends React.Component {
  render() {
    
    const Tab = createBottomTabNavigator();
    
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Collections" component={collections} />
          <Tab.Screen name="Settings" component={settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }  
}
