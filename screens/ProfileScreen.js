import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RefreshControl,SafeAreaView, ScrollView, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { COLORS, images, FONTS } from '../constants';

const Profile = () => {

      return (
      <View style={styles.container}>
            <StatusBar style="auto" />
              <Image source={images.profile} resizeMode='contain' style={styles.userImg} />
              <Text style={styles.userName}>Hamza</Text>
              <View style={styles.userInfoWrapper}>
                          <View style={styles.userInfoItem}>
                            <Text style={styles.userInfoTitle}>0</Text>
                            <Text style={styles.userInfoSubTitle}>Livres vendus</Text>
                          </View>
                          <View style={styles.userInfoItem}>
                            <Text style={styles.userInfoTitle}>0</Text>
                            <Text style={styles.userInfoSubTitle}>Livres achetés</Text>
                          </View>
                          <View style={styles.userInfoItem}>
                            <Text style={styles.userInfoTitle}>0</Text>
                            <Text style={styles.userInfoSubTitle}>Livres donnés</Text>
                          </View>
              </View>
            
      </View>
      
    )
}
  
    
  
  export default Profile;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.white,
      padding: 20,
      alignItems:'center'
    },
    userImg: {
      height: 150,
      width: 150,
      borderRadius: 75,
      marginTop : 10,
    },
    userName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    aboutUser: {
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'center',
      marginBottom: 10,
    },
    userBtnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
    userBtnReward: {
      borderColor: "#ffc60e",
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtn: {
      borderColor: '#2e64e5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnLogout: {
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5,
    },
    userBtnTxt: {
      color: '#2e64e5',
    },
    userInfoWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginVertical: 20,
    },
    userInfoItem: {
      justifyContent: 'center',
    },
    userInfoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
    },
    userInfoSubTitle: {
      fontSize: 12,
      color: '#666',
      textAlign: 'center',
    },
  });
  