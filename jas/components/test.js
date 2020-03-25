import React from "react";
import {View,Text, StyleSheet} from "react-native";
import 'react-native-gesture-handler';    

export default class test extends React.Component {
    static navigationOptions = {
        title:"Test",

    }

    render() {
        return(
            <View>
                <Text>Test</Text>
            </View>
        )
    }
}