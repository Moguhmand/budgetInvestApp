import { View, Text, Button } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { DrawerContent, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const LogoutHandler = (props: any) => {
    return (
        <DrawerContent {...props}>
            <DrawerItemList {...props} />
            <DrawerItem onPress={() => FIREBASE_AUTH.signOut()} label='Logout' />
        </DrawerContent>
    )
}

export default LogoutHandler