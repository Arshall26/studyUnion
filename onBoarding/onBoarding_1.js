import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import { FONTS, icons, images } from '../constants';
import styles from '../constants/styleSignup'


const OnBoarding1 = ({navigation}) => {

      return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "position" : "null"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0} style={styles.containerParent}>
          <View style={styles.containerDots}>
            <View style={styles.blueDot}></View>
            <View style={styles.grayDot}></View>
            <View style={styles.grayDot}></View>
            <View style={styles.grayDot}></View>
            <View style={{left: 80}}>
              <TouchableOpacity onPress={() => navigation.navigate('Email')}>
                <Text style={[FONTS.h3, styles.skip]}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        <View style={styles.containerChildV2}>
            <StatusBar style="auto" />
            <Image source={images.planet} resizeMode='contain' style={{width: 150, height: 150, top: 30, left: 10}} />
            <Text style={[FONTS.body3, styles.onBoardingDescription]}>Study Union a pour but de promouvoir {'\n'} la réutilisation de livres 
            éducatifs afin de limiter la production de papier. </Text>
              <TouchableOpacity style={[styles.next, styles.nextBoarding1]} onPress={() => navigation.navigate('OnBoarding2')}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
         
    
    )
}
  
export default OnBoarding1;