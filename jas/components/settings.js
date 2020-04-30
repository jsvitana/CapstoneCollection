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
        <View style={{color: "#FADED7", backgroundColor:style.backgroundColor, flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                <Text style={{color:style.color, fontSize: 30, top:50}}>This is the Settings pages{"\n"}</Text>
                <TouchableOpacity style={styles.darkModeButton}
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
    darkModeButton: {
        top:100,
        position: "relative",
        justifyContent: 'flex-start',
        backgroundColor: '#BB86FC', 
        padding: 15 , 
        borderRadius: 50 , 
        borderColor: '#3700B3'
    }
  });