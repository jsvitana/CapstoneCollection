import React from "react";
import {View,Text, StyleSheet} from "react-native";   
import style from "./../styles/styles.json"

export default class test extends React.Component {
    render() {
        return(
            <View style={{backgroundColor:style.backgroundColor, flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                <Text style={{color:style.color, fontSize: 30, top:50}}>Collections</Text>
                <Text>test</Text>
                <Text>test 2</Text>
            </View>
        )
    }
}
