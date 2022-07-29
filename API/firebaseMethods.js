import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";


export async function registration(email, password, {navigation}) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('registered')
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('connected')

    navigation.navigate('Prenom');
    // ..
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        prenom: "",
        age: "",
        status: "",
        filière: [],
        ville: ""
      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function updateAccountInfo(nameField, field, nextscreen, {navigation}) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function updateAccount(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                [nameField]: field
            });
      }
      updateAccount();
      navigation.navigate(nextscreen);
     
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
})
}

/*export async function userSkipToMainMenu() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return 'Bienvenue'
    } else {
      return 'Tabs'
    }
})
}*/



