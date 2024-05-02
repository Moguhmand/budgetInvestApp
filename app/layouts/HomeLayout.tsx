// import { View, Text } from 'react-native'
import React from 'react'
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/inner/Home';
import AddNewActivity from '../screens/inner/AddNewActivity';


interface RouterProps {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const HomeStack = createNativeStackNavigator();

const HomeLayout = ({ navigation, route}: RouterProps) => {
    return (
        <HomeStack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='Home' component={Home} initialParams={route.params}/>
            <HomeStack.Screen name='AddNewActivity' options={{ headerShown: true }} component={AddNewActivity} />
        </HomeStack.Navigator>
    )
}

export default HomeLayout