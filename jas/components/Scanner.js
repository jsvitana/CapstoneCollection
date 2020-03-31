import React from "react";
import {View,Text, Button, StyleSheet} from "react-native"; 
import API from "./../API/APICalls.js"

export default class Scanner extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "kkkkk"
        }
    }

    async GetItem() {
        console.log("Loaded");
        var api = new API();
        var item = await api.GetBarcodeItem("00"); 
        console.log(item) 
        if(item.item_response.code == 200) {
            this.setState({title: item.item_attributes.title});
        }       
        else {
            this.setState({title: "This is not a UPC we have, please try another."})
        }  
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>{this.state.title}</Text>
                <Button title="test" onPress={() => this.GetItem()}>

                </Button>
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