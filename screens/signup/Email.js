import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { FONTS, icons } from '../../constants';
import { handlePressEmail } from '../../methods/signupMethods';
import styles from '../../constants/styleSignup'

const Email = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirm] = useState('');

      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.largeTitle}>Inscris-toi</Text>
              <TextInput style={styles.inputEmail} keyboardType="email-address" placeholder="email" onChangeText={setEmail}/>
              <TextInput style={styles.inputEmail} placeholder="mot de passe" secureTextEntry={true} onChangeText={setPassword}/>
              <TextInput style={styles.inputEmail} placeholder="confirmer" secureTextEntry={true} onChangeText={setConfirm}/>
              <TouchableOpacity style={styles.next} onPress={() => handlePressEmail(email, password, confirmPass, {navigation})}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
          </View>
        </View>
    )
}
  
export default Email;
  
  