import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';
import InsideLayout from './app/InsideLayout';


const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      //console.log('user', user);
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }}/>
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
