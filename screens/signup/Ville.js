import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import { FONTS, icons } from '../../constants';
import { inputIsNotEmptyAndNext } from '../../methods/signupMethods';
import styles from '../../constants/styleSignup'

const Ville = ({navigation}) => {
  const [ville, setVille] = useState('');

      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.largeTitle}>Où te situes-tu ?</Text>
              <TextInput style={styles.input} onChangeText={setVille} placeholder="ville"/>
              <TouchableOpacity style={styles.next} onPress={() => inputIsNotEmptyAndNext("ville",ville, 'Status', {navigation})}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
          </View>
        </View>
    )
}
  
export default Ville;