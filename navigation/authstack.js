import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { View } from 'react-native';
import Tabs from './tabs';
import Bienvenue from '../screens/signup/Bienvenue';
import Email from '../screens/signup/Email';
import Prenom from '../screens/signup/Prenom';
import Ville from '../screens/signup/Ville';
import Filiere from '../screens/signup/Filiere';
import Status from '../screens/signup/Status';
import OnBoarding1 from '../onBoarding/onBoarding_1'
import OnBoarding2 from '../onBoarding/onBoarding_2'
import OnBoarding3 from '../onBoarding/onBoarding_3'
import OnBoarding4 from '../onBoarding/onBoarding_4'
import Age from '../screens/signup/Age';
import { COLORS } from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const StackArr = [
  { route: 'OnBoarding1', label: 'OnBoarding1',  component: OnBoarding1 },
  { route: 'OnBoarding2', label: 'OnBoarding2',  component: OnBoarding2 },
  { route: 'OnBoarding3', label: 'OnBoarding3',  component: OnBoarding3 },
  { route: 'OnBoarding4', label: 'OnBoarding4',  component: OnBoarding4 },
  { route: 'Email', label: 'Email',  component: Email },
  { route: 'Prenom', label: 'Prenom',  component: Prenom },
  { route: 'Ville', label: 'Ville',  component: Ville },
  { route: 'Status', label: 'Status',  component: Status },
  { route: 'Age', label: 'Age', component: Age },
  { route: 'Filiere', label: 'Filiere',  component: Filiere },
];

const Stack = createStackNavigator();

export default function AuthStack() {
 let routeName = 'Tabs'; 
    return (
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen name='Bienvenue' component={Bienvenue}
              options={({navigation}) => ({
                title: '', 
                headerStyle: {
                  backgroundColor: COLORS.white,
                  elevation: 0
                }})}
              />
        {StackArr.map((item, index) => {
          return (
            <Stack.Screen key={index} name={item.route} component={item.component}
              options={({navigation}) => ({
                title: '', 
                headerStyle: {
                  backgroundColor: COLORS.white,
                  elevation: 0
                },
                headerLeft: () => (
                  <View style={{marginLeft: 10}}>
                    <FontAwesome.Button name="long-arrow-left"size={25} backgroundColor={COLORS.white} color="#333" onPress={() => navigation.goBack()}/>
                  </View>
                ),
              })}
            />
          )
        })}
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: COLORS.white,
              elevation: 0
            }, headerLeft: () => (null),})}
        />
      </Stack.Navigator>
    );
  }


  

