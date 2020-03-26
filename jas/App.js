import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Green}>Welcome Collector of things!</Text>
      <Text style={styles.Green}>Would you like to...</Text>
      <View style={styles.ButtonStyle}>
        <Button title="Add to Your Collection"></Button>
        <Button title="Start a New Collection"></Button>
      </View>
      <View>
        <Text>Copyrighted by JAS Inc. 2020-2020©</Text>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101820FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  Green: {
    color: '#006B38FF',
    fontSize: 30,
  },
  ButtonStyle: {
    flex:.15,
    flexDirection: 'row',
    width: '30%',
     
    justifyContent:'center',
    alignContent:'center',
  },
  CopyRight: {
    fontSize: 5,
    
  }
});
