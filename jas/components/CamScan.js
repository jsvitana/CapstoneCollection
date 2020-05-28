import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import API from "./../API/APICalls.js"

export default class CamScan extends React.Component {
  constructor() {
    super();

    this.state = {
      scanned: false,
      hasPermission: null,
      setHasPermission: null
    }
  }

  async componentDidMount() {
    const status = await BarCodeScanner.requestPermissionsAsync();
    this.setState({
      hasPermission: status.granted
    })
    console.log(this.state.hasPermission)
  }

  ResetScanned() {
    this.state.scanned = false
    this.forceUpdate()
  }

  ScannedButton() {
    if(this.state.scanned) {
      return (
        <Button title={'Tap to Scan Again'} onPress={() => this.ResetScanned()} />
      )     
    }  
  }

  handleBarCodeScanned = async ({ type, data }) => {
    if(this.state.scanned == false) {
      // Set scanned to true so it doesnt keep hitting it a millions times
      this.state.scanned = true;

      //Find item based on data scanner return
      var api = new API();
      var item = await api.GetBarcodeItem(data);
      if(item == false) {
        alert("This is not a UPC we have, please try another.");
        this.forceUpdate()
      } 
      else { 
        if(item.item_response.message == "Data returned") {
          api.PostNewBarcodeItem(item); 
        }
        api.PostItem(item);
        this.props.navigation.navigate("Scanner", {item: item, UPCCode: item.item_attributes.upc, fromCamera: true})
      }
    }
  };

  render() { 
    if (this.state.hasPermission === null) {
      console.log(this.state.hasPermission)
      return <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end',alignItems:"center",color:"white", backgroundColor: "black"}}><Text>Requesting for camera permission</Text></View>;
    }
    if (this.state.hasPermission === false) {
      return <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end',alignItems:"center",color:"white", backgroundColor: "black"}}><Text>No access to camera</Text></View>;
    }

    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {this.ScannedButton()}                
      </View>
    );
  }
}
