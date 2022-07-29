import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '.';

export default StyleSheet.create({
    containerParent:{
      flex: 1,
      backgroundColor:COLORS.white
    },
    containerChild: {
      alignItems: 'center',
      marginTop: 100,
      backgroundColor:COLORS.white,
    },
    containerChildV2: {
      alignItems: 'center',
      marginTop: 20,
      backgroundColor:COLORS.white
    },
    containerDots:{
      width: SIZES.width/2,
      height: SIZES.height/10,
      alignSelf:'center',
      flexDirection:'row',
      alignItems:'center',
      justifyContent: 'space-evenly'
    },
    grayDot:{
      width:12,
      height:12,
      backgroundColor : COLORS.gray,
      borderRadius: 25,
      left:28
    },
    blueDot:{
      width:12,
      height:12,
      backgroundColor : COLORS.secondary,
      borderRadius: 25,
      left:28
    },
    next: {
      width: SIZES.width/6.2,
      height: SIZES.height/15,
      borderRadius: SIZES.nextRadius,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 250,
      marginLeft: 200,
      backgroundColor:COLORS.secondary
    },
    nextBienvenue: {
        width: SIZES.width/2.4,
        height: SIZES.height/16.5,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 270,
        marginLeft: 150,
        backgroundColor:COLORS.secondary
    },
    nextFiliere: {
      width: SIZES.width/6.2,
      height: SIZES.height/15,
      borderRadius: SIZES.nextRadius,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
      marginLeft: 300,
      bottom: 12,
      backgroundColor:COLORS.secondary
  },
    nextBoarding1: {
      bottom:20
  },
    input: {
      height: SIZES.height/15,
      width: SIZES.width/2,
      borderRadius: 5,
      top: 80,
      borderWidth: 4,
      textAlign:'center',
      fontFamily: "Lato_700Bold",
      fontSize: SIZES.h2,
    },
    inputEmail: {
      height: SIZES.height/15,
      width: SIZES.width/1.3,
      borderRadius: 5,
      top: 80,
      borderWidth: 4,
      textAlign:'center',
      fontFamily: "Lato_700Bold",
      fontSize: SIZES.h2,
    },
    confirmation: {
        marginTop: 70,
    },
    blueText: {
      color: COLORS.secondary,
    },
    marginBottomPlus: {
      marginBottom: 38
    },
    onBoardingDescription: {
      top : 150,
      textAlign: 'center'
    },
    marginTopPlus: {
      marginTop : 15
    },
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
    },
    skip:{
      color: COLORS.darkGray,
      textDecorationLine:'underline'
    },
  });
