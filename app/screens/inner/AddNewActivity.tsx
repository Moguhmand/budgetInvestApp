import { View, Text, Modal, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import InsideStack from '../../layouts/InsideLayout'
import { NavigationProp } from '@react-navigation/native';
import AddActivityForm from '../../components/AddActivityForm';

const AddNewActivity = ({ navigation, route }: any) => {

  React.useLayoutEffect(() => {
    const drawerNavigator = navigation.getParent('Drawer');

    if (drawerNavigator) {
      if (route.name === 'AddNewActivity') {
        drawerNavigator.setOptions({
          headerShown: false
        })
      }
    }

    return drawerNavigator ? () => {
      drawerNavigator.setOptions({
        headerShown: true,
      })
    } : undefined
  }, [navigation, route])


  return (
    <View>
      <Text>Hola!</Text>
    </View>
  )
}

export default AddNewActivity;