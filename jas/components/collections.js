import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";   
import style from "./../styles/styles.json";
/*
https://aboutreact.com/example-of-sqlite-database-in-react-native/
*/
export default class test extends React.Component {
    render() {
        return(
            <View style={{backgroundColor:style.backgroundColor, flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                <Text style={{color:style.color, fontSize: 30, top:50}}>Collections</Text>
                <Text>test</Text>
                <Text>test 2</Text>
                <TouchableOpacity style={styles.addNewButton}
                        title="Add New"
                        accessibilityLabel="Adds new Collection">
                            <Text>Add New</Text>
                        </TouchableOpacity>
            </View>
        )
    }//add list view to add new collections to an expanding list, hold to delete with a confirmation
}
const styles = StyleSheet.create({
    addNewButton: {
        top: "90%",
        flex: 1,
        position: "absolute",
        alignSelf:"flex-end",
        backgroundColor: '#BB86FC', 
        padding: 15 , 
        borderRadius: 50 , 
        borderColor: '#3700B3',
        opacity: .5
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
  });