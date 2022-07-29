import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView} from 'react-native';
import { FONTS, icons } from '../../constants';
import { inputIsNotEmptyAndNext } from '../../methods/signupMethods';
import styles from '../../constants/styleSignup'


const Age = ({navigation}) => {
  const [age, setAge] = useState('');

      return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "position" : "null"}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 5 : 0} style={styles.containerParent}>
        <View style={styles.containerChild}>
            <StatusBar style="auto" />
            <Text style={FONTS.largeTitle}>Quel age as tu ?</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={setAge}/>
              <TouchableOpacity style={styles.next} onPress={() => inputIsNotEmptyAndNext("age",age, 'Filiere', {navigation})}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
         
    
    )
}
  
export default Age;
  
 