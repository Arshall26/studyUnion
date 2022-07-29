import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FONTS, icons } from '../../constants';
import { inputIsNotEmptyAndNext } from '../../methods/signupMethods';
import styles from '../../constants/styleSignup'

const Status = ({navigation}) => {
  const [status, setStatus] = useState("Etudiant");

      return (
        <View style={styles.containerParent}>
          <View style={styles.containerChild}>
              <StatusBar style="auto" />
              <Text style={FONTS.largeTitle}>Quel est ton statut ?</Text>
              <Picker
                    selectedValue={status}
                    style={styles.input}
                    onValueChange={(itemValue) => setStatus(itemValue)}
                >
                    <Picker.Item label="Etudiant" value="Etudiant" />
                    <Picker.Item label="Parent" value="Parent" />
                    <Picker.Item label="Autre" value="Autre" />
                </Picker>
              <TouchableOpacity style={styles.next} onPress={() => inputIsNotEmptyAndNext("status",status, 'Age', {navigation})}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
          </View>
        </View>
    )
}
  
export default Status;