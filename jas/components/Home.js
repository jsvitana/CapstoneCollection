import React from "react";
import {View,Text} from "react-native";   
import { styles } from "./style"

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.baseText}>Ready to start collecting?</Text>
                <Text>test</Text>
                <Text>test 2</Text>
            </View>
        )
    }
}
