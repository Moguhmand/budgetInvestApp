// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2rZLuznaV1tFD3RnfAwVZl1_Gx14x5ro",
  authDomain: "budgetinvest.firebaseapp.com",
  projectId: "budgetinvest",
  storageBucket: "budgetinvest.appspot.com",
  messagingSenderId: "222756780811",
  appId: "1:222756780811:web:7adac9d6836196dac1400e"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, { persistence: getReactNativePersistence(ReactNativeAsyncStorage)});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

 