<<<<<<< HEAD:app/screens/Login.tsx
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native';
import * as React from 'react'; 
import { useState } from 'react';
import { FIREBASE_AUTH } from '../../firebaseConfig';
=======
import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../firebaseConfig';
>>>>>>> 71d823d3829e09811fbe8ff34fc9bcd2aa9ae4e3:app/screens/outer/Login.tsx
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
<<<<<<< HEAD:app/screens/Login.tsx
      // alert('Check your emails!');
=======
      const docRef = await setDoc(doc(FIREBASE_DB, 'Users', response.user.uid), {
      })
      
      //alert('Check your emails!');
>>>>>>> 71d823d3829e09811fbe8ff34fc9bcd2aa9ae4e3:app/screens/outer/Login.tsx
    } catch (error: any) {
      console.log(error);
      alert('Registration failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>

        <TextInput value={email}  placeholder='Email' inputMode='email' onChangeText={(text) => setEmail(text)} autoCapitalize='none' style={styles.input} ></TextInput>
        <TextInput value={password} placeholder='Password' secureTextEntry={true} onChangeText={(text) => setPassword(text)} autoCapitalize='none' style={styles.input}></TextInput>
        {loading ? (<ActivityIndicator size='large' color='#0000ff' />
        ) : (
          <>
            <Button title='Login' onPress={signIn} />
            <Button title='Create account' onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center"
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },
  button: {

  }

});