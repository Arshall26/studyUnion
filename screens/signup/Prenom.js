import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { FONTS, icons } from '../../constants';
import { inputIsNotEmptyAndNext } from '../../methods/signupMethods';
import styles from '../../constants/styleSignup'

const Prenom = ({navigation}) => {
  const [prenom, setPrenom] = useState('');

      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.largeTitle}>Quel est ton prenom ?</Text>
              <TextInput style={styles.input} onChangeText={setPrenom}/>
              <TouchableOpacity style={styles.next} onPress={() => inputIsNotEmptyAndNext("prenom",prenom, 'Ville', {navigation})}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
          </View>
        </View>
    )
}
  
export default Prenom;
  
  