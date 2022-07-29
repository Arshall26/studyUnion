import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { FONTS } from '../../constants';
import styles from '../../constants/styleSignup'

const Bienvenue = ({navigation}) => {

      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.largeTitle}>Bienvenue sur Study Union !</Text>
              <TouchableOpacity style={styles.nextBienvenue} onPress={() => navigation.navigate('OnBoarding1')}>
                  <Text style={FONTS.h2}>commencer</Text>
              </TouchableOpacity>
          </View>
        </View>    
      )
}
  
export default Bienvenue;
  
