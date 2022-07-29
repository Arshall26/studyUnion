import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { COLORS, FONTS, icons, SIZES, images } from '../../constants';
import { inputIsNotEmptyAndNext } from '../../methods/signupMethods';
import styles from '../../constants/styleSignup'
import ToggleButton from '../../components/ToggleButton';


const Filiere = ({navigation}) => {
  const filiere = [];
  const primaireArray = ['CP', 'CE1', 'CE2', 'CM1', 'CM2'];
  const secondaireArray = ['6EME', '5EME', '4EME', '3EME', 'SECONDE', 'PREMIERE', 'TERMINALE'];
  const superieurArray = ['CPGE', 'IUT', 'IUP', 'INSPE', 'STS', 'BTS', 'LICENCES SCIENCES, TECHNOLOGIE ET SANTÉ', 'LICENCES SCIENCES HUMAINES ET SOCIALES', 'LICENCES ARTS, LETTRES ET LANGUES'];

 
      return (
        <View style={styles.containerParent}>
          <ScrollView>
              <StatusBar style="auto" />
              <Text style={[FONTS.largeTitle, styles.marginBottomPlus]}>Choisis des filières </Text>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Image source={images.primaire} resizeMode='contain' style={{width: 25, height: 25, top: 15, right: 20}} />
                <Text style={[FONTS.body2, styles.marginTopPlus]}>Enseignement primaire</Text>
                <Image source={images.primaire} resizeMode='contain' style={{width: 25, height: 25, top: 15, left: 20}} />
              </View>
              <View style={{width:'100%', marginTop:25, flexDirection:'row', flexWrap:'wrap'}}>
                {primaireArray.map((item, index) => {
                    return (
                      <ToggleButton filliereItem={item} array={filiere} key={index}/>
                    )
                    })}
              </View>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Image source={images.secondaire} resizeMode='contain' style={{width: 25, height: 25, top: 15, right: 20}} />
                <Text style={[FONTS.body2, styles.marginTopPlus]}>Enseignement secondaire</Text>
                <Image source={images.secondaire} resizeMode='contain' style={{width: 25, height: 25, top: 15, left: 20}} />
              </View>
              <View style={{width:'100%', marginTop:25, flexDirection:'row', flexWrap:'wrap'}}>
              {secondaireArray.map((item, index) => {
                    return (
                      <ToggleButton filliereItem={item} array={filiere} key={index}/>
                    )
                    })}
                  
                  </View>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Image source={images.superieur} resizeMode='contain' style={{width: 25, height: 25, top: 15, right: 20}} />
                <Text style={[FONTS.body2, styles.marginTopPlus]}>Enseignement superieur</Text>
                <Image source={images.superieur} resizeMode='contain' style={{width: 25, height: 25, top: 15, left: 20}} />
              </View>
              <View style={{width:'100%', marginTop:25, flexDirection:'row', flexWrap:'wrap'}}>
                {superieurArray.map((item, index) => {
                    return (
                      <ToggleButton filliereItem={item} array={filiere} key={index}/>
                    )
                    })}
                  </View>
              <TouchableOpacity style={styles.nextFiliere} onPress={() => inputIsNotEmptyAndNext("filière",filiere, 'Tabs', {navigation})}>
                <Image source={icons.rarrow} resizeMode='contain' style={{width: 25, height: 25}} />
              </TouchableOpacity>
          </ScrollView>
        </View>
    )
}
  
export default Filiere;

/*<TouchableOpacity key={index} style={{backgroundColor:COLORS.transparentLightGray, borderRadius: 20, padding:10, marginLeft:7, marginBottom:7}}>
                        <Text style={{fontFamily: "Lato_700Bold",fontSize: SIZES.h3}}>{item}</Text>
                    </TouchableOpacity> */