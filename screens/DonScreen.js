import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { images, icons, COLORS, SIZES } from '../constants';

const Don = () => {

      return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Don</Text>
        </View>
    
    )
}
  
    
  
  export default Don;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.white
    }
  });