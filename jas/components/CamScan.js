import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import API from "./../API/APICalls.js"

//
// BIG FLAW IN THIS RIGHT NOW, DOES NOT ASK FOR PERMISSION TO USE CAMERA FIGURE THIS OUT
//

export default class CamScan extends React.Component {
  constructor() {
    super();

    this.state = {
      scanned: false
    }
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
        //alert(item.item_attributes.title);
        this.props.navigation.navigate("Scanner", {item: item, UPCCode: item.item_attributes.upc, fromCamera: true})
      }
    }
  };

  render() { 
    //const [hasPermission, setHasPermission] = useState(null);
    //const [scanned, setScanned] = useState(false);

    /*useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);*/

    /*if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }*/

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {this.ScannedButton()}                
      </View>
    );
  }
}
