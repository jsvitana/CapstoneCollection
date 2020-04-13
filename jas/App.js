import * as React from 'react';
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import CamScan from "./components/CamScan";
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
          <Tab.Screen name="Home" component={Home} options={{unmountOnBlur:true}} />
          <Tab.Screen name="Collections" component={collections} options={{unmountOnBlur:true}} />
          <Tab.Screen name="Settings" component={settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }  
}
