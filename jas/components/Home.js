import React from "react";
import {View,Text,Button, StyleSheet} from "react-native";   


export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Does this workdhhhhddkdddd</Text>
                <Button title="press" onPress={() => this.props.navigation.navigate("Scanner")}/>
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