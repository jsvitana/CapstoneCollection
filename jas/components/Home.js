import React from "react";
import {View,Text,Button, StyleSheet} from "react-native";
import {withNavigation} from 'react-navigation';
import 'react-native-gesture-handler';    

export default class Home extends React.Component {
    static navigationOptions = {
        title:"Home",
    }

    constructor(props) {
        super(props);
    }

    changeView() {
        const {navigation} = this.props;

        navigation.navigate("test")
    }

    render() {
        return(
            <View>
                <Text>Does this workdddkd</Text>
                <Button title="Test" onPress={() => this.changeView()}></Button>
            </View>
        )
    }
}