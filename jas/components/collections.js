import React from "react";
import {View,Text} from "react-native";   
import { styles } from "./style"

export default class test extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.baseText}>Collections</Text>
                <Text>test</Text>
                <Text>test 2</Text>
            </View>
        )
    }
}
