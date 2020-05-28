import React from "react";
import {View,Text, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native"; 
import style from "./../styles/styles.json" 
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
            <Text style={{color:style.color, fontSize: 30, top:50}}>
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
            if(item.item_response.message == "Data returned") {
                api.PostNewBarcodeItem(item); 
            }
            api.PostItem(item);
            alert(item.item_attributes.title); 
        }  
    }

    async GetAllItems() {
        var api = new API();
        var item = await api.GetItems(); 
        console.log(item);

    }




    handleText = (text) => {
        this.setState({UPCCode: text})
    }


    render() {
        return(
            <View style={{color: "#FADED7", backgroundColor:style.backgroundColor, flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                <View style={styles.manualEntry}>
                    <Text style={{color:style.color, fontSize: 30, top:50}}>Manual Barcode Entry{"\n"}</Text>
                    <TextInput style={{color:style.color, fontSize: 30, top:50}} placeholder = "UPC Code..." value={this.state.UPCCode} onChangeText = {this.handleText} />
                    <TouchableOpacity style={styles.btn} onPress={() => this.GetItem()} >
                        <Text> Submit </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.btn} onPress={() => this.GetAllItems()} >
                        <Text> Test </Text>
                    </TouchableOpacity>



                    
                </View>

                {this.UpdateItemText()}

                <View style={styles.cameraEntry} on>
                    <Text style={{color:style.color, fontSize: 30, top:50}}>Use Your Camera{"\n\n"}</Text>
                    <Button title="press" onPress={() => this.props.navigation.navigate("CamScan")}/>
                </View>               
            </View>
        )
    }
}

const styles = StyleSheet.create({

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
    },
    btn: {
        justifyContent: 'flex-start',
        position: "relative",
        top: 100,
        backgroundColor: '#BB86FC'
    }
  });