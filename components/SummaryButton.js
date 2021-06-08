import *as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
class Horoscopebutton extends React.Component{
  render(){
    return(
         <TouchableOpacity style={styles.horoscope}>
     <Text style={styles.horoscopeText}>
          today yours stars are in left means your lucky number is 4,5,6,29.
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  horoscope: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100
  },
  horoscopeText: {
    fontWeight: 'bold',
    fontSize: 20
  }
  });
  export default Horoscopebutton;