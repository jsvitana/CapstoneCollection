import React from "react";
import {View,Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator} from "react-native";   
import style from "./../styles/styles.json"
import API from "./../API/APICalls.js"
import { getLightEstimationEnabled } from "expo/build/AR";

export default class test extends React.Component {

    constructor() {
        super();
    
        this.state = {         
            dataSource: [],
            loading: true
        }
      }

    async componentDidMount() {
        var api = new API();
        var item = await api.GetUserItems(); 
        
        this.setState({
            dataSource: item.userItems,
            loading: false
        })
        
    }

    FlatListItemSeperator = () => {
        return (
            <View style={{
                height: .5,
                width:"100%",
                backgroundColor:"rgba(0,0,0,0.5)",
            }}
            />
        );
    }

    renderItem = (data) => {
        return(
            <View style={styles.container}>
            <TouchableOpacity style={styles.list}>
            <Text style={styles.text}>Item Name: {data.ItemName}</Text>
            <Text style={styles.text}>UPC Code: {data.UPC}</Text>
            </TouchableOpacity>
            </View>
        )
    }


    render() {
        if(this.state.loading){
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }

        return(
            <View style={{color: "#FADED7", backgroundColor:style.backgroundColor, flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent = {this.FlatListItemSeperator}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor= {item=>item.ID.toString()}
                />
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top:50,
      
      justifyContent:"center"
     },
    loader:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
     },
    list:{
      paddingVertical: 4,
      margin: 5,
      backgroundColor: "#101820FF"
     },
     text:{
        fontSize: 18,
        color:"#fff"
     }
  });
