import { View, Text, Button } from 'react-native'
import React from 'react'
import Home from './screens/Home';
import Details from './screens/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogoutHandler from './components/LogoutHandler';

//const InsideStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InsideLayout = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen 
        name='Home' 
        component={Home} 
        options={{
          // headerLeft: () => (

          // ) 
          headerRight: () => (
            <Button onPress={() => FIREBASE_AUTH.signOut()} title='Logout' />
          ),
        }}/>
      <Drawer.Screen 
        name='Details' 
        component={Details}
      />
      <Drawer.Screen
        name='Logout'
        component={ LogoutHandler }
      />
      
    </Drawer.Navigator>
  );
}

export default InsideLayout;
