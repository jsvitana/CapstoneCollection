import React from "react";
import {View,Text,Button, StyleSheet} from "react-native";   

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Does this workdhhhhddkd</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });