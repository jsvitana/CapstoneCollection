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
        var item = await api.GetItems(); 
        console.log(item);
        
        this.setState({
            dataSource: item,
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

    renderItem=(data)=>
    
    <TouchableOpacity style={styles.list}>
    <Text>{data.item.ItemName}</Text>
    <Text>{data.item.UPC}</Text>
    </TouchableOpacity>
    render() {
        if(this.state.loading){
            return(
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9"/>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                <FlatList

                    data= {this.state.dataSource}
                    ItemSeparatorComponent = {this.FlatListItemSeperator}
                    renderItem= {item=> this.renderItem(item)}
                    keyExtractor= {item=>item.id.toString()}

                />

            </View>
        )

    } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
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
      backgroundColor: "#fff"
     }
  });
