import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { images, icons, COLORS, SIZES } from '../constants';

const Home = () => {

      return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Home</Text>
        </View>
    
    )
}
  
    
  
  export default Home;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:COLORS.white
    }
  });