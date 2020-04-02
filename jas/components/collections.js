import React from "react";
import {View,Text, StyleSheet} from "react-native";   

export default class test extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Collections</Text>
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