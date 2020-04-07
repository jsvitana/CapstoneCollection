import React from "react";
import {View,Text, TouchableOpacity} from "react-native";   
import { styles } from "./style";
var DMode = true;
export default class Settings extends React.Component {
// https://subscription.packtpub.com/book/application_development/9781786462558/1/ch01lvl1sec11/creating-a-toggle-button

state={
    bColor:'#101820FF',
    tColor:'#FADED7'
};

darkModeSwitch(){
    if (!DMode){
        this. setState({backGroundColor:'#101820FF'});
        this. setState({textColor:'#FADED7'});
        DMode = true;
    }
    else{
        this. setState({textColor:'#101820FF'});
        this. setState({backGroundColor:'#FADED7'});
        DMode=false;
    }
    
}

    render() {
        return(
        <View style={[{backgroundColor:this.state.backGroundColor}, styles.container]}>
                <Text style={[{color:this.state.textColor}, styles.baseText]}>This is the Settings pages{"\n"}</Text>
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
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    baseText: {
        top:50,
        fontSize: 30,
    },
    darkModeButton: {
        top:100,
        position: "relative",
        justifyContent: 'flex-start',backgroundColor: '#BB86FC', 
        padding: 15 , 
        borderRadius: 50 , 
        borderColor: '#3700B3'
    }
  });*/