import * as React from 'react';
import { StyleSheet, Text, View, Button, TabBarIOS } from 'react-native';
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import CamScan from "./components/CamScan";
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
          <Tab.Screen name="Scanner" component={Scanner} />
          <Tab.Screen name="CamScan" component={CamScan} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }  
}
