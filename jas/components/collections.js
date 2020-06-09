import React from "react";
import {View,Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator} from "react-native";   
import style from "./../styles/styles.json"
import API from "./../API/APICalls.js"
import { getLightEstimationEnabled } from "expo/build/AR";
import { SearchBar } from "react-native-elements";

export default class test extends React.Component {

    constructor() {
        super();
    
        this.state = {         
            dataSource: [],
            loading: true,
            refreshing: false
        }
      }

    componentDidMount() {
       this.makeRequest();
        
    }


    async makeRequest(){
        var api = new API();
        var item = await api.GetUserItems(); 
        
        this.setState({
            dataSource: item.userItems,
            loading: false,
            refreshing: false
        })
    }

    handleRefresh = () => {
        this.setState(
            {
                refreshing: true
            },
            () => {
                this.makeRequest();
            }
        );
      
    }

    FlatListItemSeperator = () => {
        return (
            <View style={{
                height: .5,
                width:"100%",
                backgroundColor:"#4254f5",
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
            <View style={{backgroundColor: 'black', flex:1, margin: 0}}>
                <View style={styles.styleContainer}>
                    <View style={{color: "#FADED7", /*backgroundColor:style.backgroundColor,*/ flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                        <FlatList
                            data={this.state.dataSource}
                            ItemSeparatorComponent = {this.FlatListItemSeperator}
                            renderItem={({ item }) => this.renderItem(item)}
                            keyExtractor= {item=>item.ID.toString()}
                            refreshing = {this.state.refreshing}
                            onRefresh = {this.handleRefresh}
                        />
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
      backgroundColor: "#4254f5"
     },
     text:{
        fontSize: 18,
        color:"#fff"
     }
  });
