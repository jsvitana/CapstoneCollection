import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from "./components/Home";
import test from "./components/test";
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <AppContainer/>
        <Text style={styles.navigation}>Hello</Text> 
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  HomePage: {screen: Home},
  test:{screen: test}
},
{
  initialRouteParams: "Home"
});

const AppContainer = createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 1
  }
});
