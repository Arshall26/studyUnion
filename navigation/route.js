import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authstack';


const Routes = () => {
  
  return (
    <NavigationContainer>
      <AuthStack/> 
    </NavigationContainer>
  );
};
export default Routes;
