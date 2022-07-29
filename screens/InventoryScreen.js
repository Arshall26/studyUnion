import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { COLORS } from '../constants';

const Inventory = () => {

      return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Inventory</Text>
        </View>
    
    )
}
  
    
  
  export default Inventory;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.white
    }
  });