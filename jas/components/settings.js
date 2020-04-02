import React from "react";
import {View,Text,Button, StyleSheet, TouchableOpacity} from "react-native";   
import { HeaderBackground } from "react-navigation-stack";
import { ToggleButton } from 'react-native-paper';

export default class Settings extends React.Component {
// https://subscription.packtpub.com/book/application_development/9781786462558/1/ch01lvl1sec11/creating-a-toggle-button

    state={
        colors:['green', 'blue', 'yellow', 'red'],
        buttonColor:'green'
    };

    darkModeSwitch(){
        const colorArray= this.state.colors;
        var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        this. setState({buttonColor:currentColor});
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.baseText}>This is the Settings pages{"\n"}</Text>
                <TouchableOpacity style={{backgroundColor:this.state.buttonColor, padding: 15}}
                        onPress={()=>this.darkModeSwitch()}
                        title="Dark Mode"
                        accessibilityLabel="Turns Dark Mode on/off">
                            <Text>Dark Mode</Text>
                        </TouchableOpacity>
            </View>
    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#101820FF',
    },
    baseText: {
        top:50,
        fontSize: 30,
        color: '#FADED7',
    },
    darkMode: {
        position: "absolute",
        alignSelf: 'flex-end',
        justifyContent: 'flex-start'
    }
  });