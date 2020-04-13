import React from "react";
import { StyleSheet} from 'react-native';
var DMode = true;

export let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#101820FF',
    },
    baseText: {
        marginTop: 50,
        fontSize: 30,
        color: '#FADED7',
    },
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
    function updateDarkMode(backgroundColor, textColor){
        this.setState({textColor:'#101820FF'});
        this.setState({backGroundColor:'#FADED7'});
    }
    export default class DarkMode extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                backgroundColor: '#FADED7',
                textColor: '#101820FF'
            }
            this.updateDarkMode = updateDarkMode.bind(this);
        }
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
            return null
        }
    };