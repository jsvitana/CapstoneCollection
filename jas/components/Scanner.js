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
        catch{ }
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
            console.log("this is eeree")
            this.props.navigation.navigate("Scanner", {item: item, UPCCode: item.item_attributes.upc, fromCamera: true})
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
            <View style={{backgroundColor: 'black', flex:1, margin: 0}}>
                <View style={styles.styleContainer}>
                    <View style={{color: "#FADED7", /*backgroundColor:style.backgroundColor,*/ flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                        <View style={styles.manualEntry}>
                            <Text style={{color:style.color, fontSize: 30, top:50}}>Manual Barcode Entry{"\n"}</Text>
                            <TextInput style={{fontSize: 30, top:50}} placeholder = "UPC Code..." placeholderTextColor="#99abc7" value={this.state.UPCCode} onChangeText = {this.handleText} />
                            <TouchableOpacity style={styles.btn} onPress={() => this.GetItem()} >
                                <Text style={{color: 'white', fontSize: 15}}> Submit! </Text>
                            </TouchableOpacity>                          
                        </View>

                        {this.UpdateItemText()}

                        <View style={styles.cameraEntry} on>
                            <TouchableOpacity style={styles.cameraBtn} onPress={() => this.props.navigation.navigate("CamScan")} >
                                <Text style={{color: 'white', fontSize: 30}}> Use Your Camera! </Text>
                            </TouchableOpacity>
                        </View>               
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    styleContainer: {
        color: "#FADED7",
        backgroundColor:"#4254f5",
        flex:1 , alignItems:"center",
        justifyContent: 'flex-start',
        margin: 40,
        borderRadius: 30
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
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        top: 100,
        backgroundColor: '#00c2bf',      
        borderRadius: 15,
        width: 100,
        height: 25
    },
    cameraBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        backgroundColor: '#00c2bf',      
        borderRadius: 25,
        width: 250,
        height: 50
    }
  });