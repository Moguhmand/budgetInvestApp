import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/outer/Login';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';
import InsideLayout from './app/layouts/InsideLayout';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
<<<<<<< HEAD
      // console.log('user', user);
=======
      //console.log('user', user);
>>>>>>> 71d823d3829e09811fbe8ff34fc9bcd2aa9ae4e3
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
      screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} />
        ) : (
          <Stack.Screen name='Login' component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
