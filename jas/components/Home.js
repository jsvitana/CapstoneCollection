import React from "react";
import {View,Text, StyleSheet} from "react-native";   
import style from "./../styles/styles.json" 
import userData from "./../userData/userData";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View style={{backgroundColor: 'black', flex:1, margin: 0}}>
                <View style={styles.styleContainer}>
                    <View style={{color: "#FADED7", /*backgroundColor:style.backgroundColor,*/ flex:1 , alignItems:"center" , justifyContent: 'flex-start' }}>
                        <Text style={{color:style.color, fontSize: 30, top:50, textAlign: "center"}}>
                            Welcome {userData.userDisplayName}{"\n"}
                            Ready to start collecting?
                        </Text>
                        <Text style={{marginTop: 150, color:style.color, fontSize: 20, textAlign: "center"}}>
                            Xpert Collector is a collection app which helps you keep a hard list of what items you have collected. {"\n \n"}
                            If you have something to collect add it here! {"\n \n"} 
                            This app uses a barcode API to locate your items.... if the item is not available check back later it may have been added! {"\n \n"}
                            Future updates will include being able to add a request to have an item added to the app so you'll be able to collect it. {"\n \n"}
                            Until then... Happy Collecting!
                        </Text>
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
    }
  });