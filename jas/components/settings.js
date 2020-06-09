import React from "react";
import {View,Text, TouchableOpacity, StyleSheet} from "react-native";  
import style from "./../styles/styles.json"

var DMode = true;
export default class Settings extends React.Component {
//------------------------------------redux--------------------------------------------
darkModeSwitch(){
    
    if (!DMode){
        style.backgroundColor='#101820FF';
        style.color='#FADED7';
        DMode = true;
    }
    else{
        style.color='#101820FF';
        style.backgroundColor='#FADED7';
        DMode=false;
    }
    this.forceUpdate();
}

    render() {
        return(
            <View style={{backgroundColor: 'black', flex:1, margin: 0}}>
                <View style={styles.styleContainer}>
                    <View style={{color: "#FADED7", /*backgroundColor:style.backgroundColor,*/ flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                        <Text style={{color:style.color, fontSize: 30, top:50}}>Settings{"\n"}</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => this.darkModeSwitch()} >
                            <Text style={{color: 'white', fontSize: 15}}> Dark Mode </Text>
                        </TouchableOpacity>  
                    </View>
                </View>
            </View>
    
        )
    }
}
let styles = StyleSheet.create({
    styleContainer: {
        color: "#FADED7",
        backgroundColor:"#4254f5",
        flex:1 , alignItems:"center",
        justifyContent: 'flex-start',
        margin: 40,
        borderRadius: 30
    },
    darkModeButton: {
        top:100,
        position: "relative",
        justifyContent: 'flex-start',
        backgroundColor: '#BB86FC', 
        padding: 15 , 
        borderRadius: 50 , 
        borderColor: '#3700B3'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        top: 100,
        backgroundColor: '#00c2bf',      
        borderRadius: 15,
        width: 100,
        height: 35
    },
  });