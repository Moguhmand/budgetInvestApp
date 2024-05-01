import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/inner/Home';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AddNewActivity from '../screens/inner/AddNewActivity';


interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const HomeStack = createNativeStackNavigator();

const HomeLayout = ({ navigation }: RouterProps) => {
    return (
        <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='AddNewActivity' options={{ headerShown: true }} component={AddNewActivity} />
        </HomeStack.Navigator>
    )
}

export default HomeLayout