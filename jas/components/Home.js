import React from "react";
import {View,Text, StyleSheet} from "react-native";   
import style from "./../styles/styles.json" 
import userData from "./../userData/userData";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={{color: "#FADED7", backgroundColor:style.backgroundColor, flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                <Text style={{color:style.color, fontSize: 30, top:50}}>
                    Welcome {userData.userDisplayName}{"\n"}
                    Ready to start collecting?
                </Text>
            </View>
        )
    }
}