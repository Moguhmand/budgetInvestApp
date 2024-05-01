import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from '../screens/inner/Home';
import Details from '../screens/inner/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationProp } from '@react-navigation/native';
import HomeLayout from './HomeLayout';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

//const InsideStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const InsideLayout = ({ navigation }: RouterProps) => {
  return (
    <Drawer.Navigator id='Drawer' initialRouteName='HomeLayout' drawerContent={props => <AppDrawerContent {...props} />}>
      <Drawer.Screen
        name='HomeLayout'
        component={HomeLayout}
        options={{
          headerRight: () => (
            <FontAwesome.Button name='plus-square' onPress={() => navigation.navigate('AddNewActivity')} />
          ),
        }}
      />

      <Drawer.Screen
        name='Details'
        component={Details}
        options={{ headerTitle: 'Details' }}
      />

    </Drawer.Navigator>
  );
}

const AppDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <DrawerItemList {...props} />
      <View style={{ flex: 1, marginVertical: 20, borderWidth: 1 }}>
        <DrawerItem
          label="Logout"
          onPress={() => {
            FIREBASE_AUTH.signOut();
          }}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        />
      </View>
    </DrawerContentScrollView>
  )
}

export default InsideLayout;
