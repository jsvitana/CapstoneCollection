import * as React from 'react';
import { StyleSheet, Text, View, Button, TabBarIOS } from 'react-native';
import Home from "./components/Home";
import test from "./components/test";
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
          <Tab.Screen name="Test" component={test} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }  
}
