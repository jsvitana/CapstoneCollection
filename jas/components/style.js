
import { StyleSheet} from 'react-native';

export let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#101820FF',
        
    },
    baseText: {
        marginTop: 50,
        fontSize: 30,
        color: '#FADED7',
    },
    darkModeButton: {
      top:100,
      position: "relative",
      justifyContent: 'flex-start',
      backgroundColor: '#BB86FC', 
      padding: 15 , 
      borderRadius: 50 , 
      borderColor: '#3700B3'
  }
  });