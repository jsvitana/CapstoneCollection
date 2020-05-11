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
            loading: false
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

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    renderFooter = () => {
        if (!this.state.loading) return null;

        return(
            <View
                style={{
                    paddingVertical: 20,
                    
                }}
                >
                    <ActivityIndicator animating size = "large"/>
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
                    ListHeaderComponent = {this.renderHeader}
                    ListFooterComponent = {this.renderFooter}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor= {item=>item.ID.toString()}
                    refreshing = {this.state.refreshing}
                    onRefresh = {this.handleRefresh}
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
