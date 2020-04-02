import React from "react";
import {View,Text,Button, StyleSheet} from "react-native";   
import { HeaderBackground } from "react-navigation-stack";

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Ready to start collecting?</Text>
                <Text>test</Text>
                <Text>test 2</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#101820FF',
        
    },
    header: {
        marginTop: 50,
        fontSize: 30,
        color: '#FADED7',
    },
  });