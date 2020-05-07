import * as React from 'react';
import {View,Text, Button, TextInput, StyleSheet, TouchableOpacity, Image, Linking} from "react-native"; 
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
import {createStackNavigator} from 'react-navigation-stack';

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

  registerUser() {
    Linking.openURL('https://xpertcollector.azurewebsites.net/').catch(err => console.error("Couldn't load page", err));
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
        <View style={{backgroundColor: 'black', flex: 1}}>
          <View style={styles.loginContainer}>
            <Text style={{color:style.color, fontSize: 20, top:200}}>Login to start collecting!</Text>
            <Image source={require("./assets/LogoTransparent.png")} />

            <View style={{margin: 50}}>
              <TextInput
                style={{backgroundColor: "white", width: 200, height:35, borderRadius: 7}}
                placeholder="Username"
                placeholderTextColor="grey"
                onChangeText = {(text) => this.setState({userName: text})}
              />
              <TextInput
                style={{backgroundColor: "white", width: 200, height:35, top:20, borderRadius: 7}}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry
                onChangeText = {(text) => this.setState({password: text})}
              />
              <TouchableOpacity style={styles.loginButton} title="login" onPress={() => {this.validateLogin();}}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.registerAccountButton}>
              <TouchableOpacity onPress={() => this.registerUser()}>
                <Text style={styles.registerAccountText}>Register For An Account!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } 
  }
}

const styles = StyleSheet.create({

  loginContainer: {
    color: "#FADED7",
    backgroundColor:"#4254f5",
    flex:1 , alignItems:"center",
    justifyContent: 'flex-start',
    margin: 40,
    borderRadius: 30
  },
  loginHeader: {
    color:style.color,
    fontSize: 30,
    top:100
  },
  loginButton: {
    top: 75,
    height: 40,
    textAlign: 'center'
  },
  loginButtonText: {
    color: '#03e3fc',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '500'
  },
  registerAccountButton: {
    margin: 100,
    width: 250
  },
  registerAccountText: {
    fontSize: 20,
    color: '#03e3fc',
    textAlign: 'center'
  }
});
