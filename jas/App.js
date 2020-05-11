import * as React from 'react';
import {View,Text, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native"; 
import API from "./API/APICalls.js"
import Home from "./components/Home";
import Scanner from "./components/Scanner";
import CamScan from "./components/CamScan";
import collections from "./components/collections";
import settings from "./components/settings";
import style from "./styles/styles.json" 
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        login: false,
        userName: "",
        password: ""
    }
  }

  async validateLogin() {
    var api = new API();
    this.setState({
      login: await api.Login(this.state.userName, this.state.password)
    }) 
    console.log(this.state.login)
  }

  render() {

    if(this.state.login == true) {
      const Tab = createBottomTabNavigator();

      return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{unmountOnBlur:true}} />
            <Tab.Screen name="Collections" component={collections} options={{unmountOnBlur:true}} />        
            <Tab.Screen name="Scanner" component={Scanner} options={{unmountOnBlur: true}}/>
            <Tab.Screen name="CamScan" component={CamScan}  options={{unmountOnBlur: true}} />
            <Tab.Screen name="Settings" component={settings} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    else {
      return (
        <View style={{color: "#FADED7", backgroundColor:"gray", flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
          <Text style={{color:style.color, fontSize: 30, top:50}}>Login</Text>

          <View style={{margin: 100}}>
            <TextInput
              style={{backgroundColor: "white", width: 200, height:25}}
              placeholder="Username"
              placeholderTextColor="black"
              onChangeText = {(text) => this.setState({userName: text})}
            />
            <TextInput
              style={{backgroundColor: "white", width: 200, height:25, top:20}}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry
              onChangeText = {(text) => this.setState({password: text})}
            />
            <TouchableOpacity style={{top:100}} title="login" onPress={() => {this.validateLogin();}}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } 
  }
}
