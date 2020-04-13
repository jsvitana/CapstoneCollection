import React from "react";
import {View,Text, Button, TextInput, StyleSheet} from "react-native"; 
import API from "./../API/APICalls.js"
import CamScan from "./CamScan"
import { NavigationContainer } from "@react-navigation/native";

export default class Scanner extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "",
            UPCCode: "",
            fromCamera: false,
            test: ""
        }
    }

    componentDidMount() {
        try{
            console.log("hereeeeeee")
            if (this.props.route.params.fromCamera) {
                this.setState({
                    UPCCode: this.props.route.params.UPCCode.slice(1),
                    title: this.props.route.params.item.item_attributes.title
                })
                this.props.route.params.fromCamera = false
                this.forceUpdate()
            }
            
        }
        catch{

        }
    }

    UpdateItemText() {
        return (
            <Text>
                {this.state.UPCCode}
                {"\n\n"}
                {this.state.title}
            </Text>
        )
    }

    async GetItem() {
        console.log("Loaded");
        console.log(this.state.UPCCode)
        var api = new API();
        var item = await api.GetBarcodeItem(this.state.UPCCode); 
        console.log(item) 
        if(item == false) {
            alert("This is not a UPC we have, please try another.")
        }       
        else {
            alert(item.item_attributes.title); 
        }  
    }

    handleText = (text) => {
        this.setState({UPCCode: text})
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.manualEntry}>
                    <Text>Manual Barcode Entry</Text>
                    <TextInput style={styles.textInput} placeholder = "UPC Code..." value={this.state.UPCCode} onChangeText = {this.handleText} />
                    <Button title="Submit" onPress={() => this.GetItem()} />
                </View>

                {this.UpdateItemText()}

                <View style={styles.cameraEntry} on>
                    <Text>Use Your Camera</Text>
                    <Button title="press" onPress={() => this.props.navigation.navigate("CamScan")}/>
                </View>               
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
    manualEntry: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraEntry: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        margin: 25,
        height: 30,
        width: 200,
        borderWidth: 1
    }
  });