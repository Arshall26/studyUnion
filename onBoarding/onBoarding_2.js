import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import { FONTS, icons, images } from '../constants';
import styles from '../constants/styleSignup'


const OnBoarding2 = ({navigation}) => {

      return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "position" : "null"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0} style={styles.containerParent}>
          <View style={styles.containerDots}>
            <View style={styles.grayDot}></View>
            <View style={styles.blueDot}></View>
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
            <Image source={images.education} resizeMode='contain' style={{width: 150, height: 150, top: 30}} />
            <Text style={[FONTS.body3, styles.onBoardingDescription]}>Encourageons l'équité et l'accès à l'éducation {'\n'}pour tous.</Text>
              <TouchableOpacity style={styles.next} onPress={() => navigation.navigate('OnBoarding3')}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
         
    
    )
}
  
export default OnBoarding2;