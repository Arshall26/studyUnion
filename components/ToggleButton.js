import React, {useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../constants';

export default function ToggleButton({array, filliereItem, ...rest}) {

  function handlePress(){
    if(isPress) { 
      setIsPress(false);
      array.splice(array.indexOf(filliereItem),1);
    } else {
      setIsPress(true);
      array.push(filliereItem);
    }
  }

  const [ isPress, setIsPress ] = useState(false);

  var touchProps = {
    activeOpacity: 1,
    style: isPress ? styles.btnPress : styles.btnNormal,
    onPress: () => handlePress(),                 
  };

  return (
      <TouchableOpacity {...touchProps} {...rest}>
        <Text style={{fontFamily: "Lato_700Bold",fontSize: SIZES.h3}}>{filliereItem}</Text>
      </TouchableOpacity>
  );
}

var styles = StyleSheet.create({
  btnNormal: {
    backgroundColor:COLORS.transparentLightGray,
    borderRadius: 20,
    padding:10, 
    marginLeft:7, 
    marginBottom:7
  },
  btnPress: {
    backgroundColor:COLORS.red,
    borderRadius: 20,
    padding:10, 
    marginLeft:7, 
    marginBottom:7
  }
});