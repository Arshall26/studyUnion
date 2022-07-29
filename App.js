import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Lato_900Black, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato';
import 'react-native-gesture-handler';
import Routes from './navigation/route';
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCNSG3IYBYGslTT-6sK66NbtIzO-UODKf0",
  authDomain: "study-union.firebaseapp.com",
  projectId: "study-union",
  storageBucket: "study-union.appspot.com",
  messagingSenderId: "738278822454",
  appId: "1:738278822454:web:403890dcd5028cca8abe97",
  measurementId: "G-NE60PTG2SL"
};

if(!firebase.apps.length){
  console.log('Connected with Firebase')
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}


const App = () => {
  let [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Routes />
    )
  }
}
  

export default App;

