import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/Home';
import Details from './screens/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const InsideStack = createNativeStackNavigator();

const InsideLayout = () => {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Home' component={Home} />
      <InsideStack.Screen name='Details' component={Details} />
    </InsideStack.Navigator>
  )
}

export default InsideLayout