import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAa6prGyv1zQjLNe1HvTRs7Ip5vrGDNh2U",
  authDomain: "counsel-compass.firebaseapp.com",
  databaseURL: "https://counsel-compass.firebaseio.com",
  projectId: "counsel-compass",
  storageBucket: "counsel-compass.appspot.com",
  messagingSenderId: "663627230339",
  appId: "1:663627230339:web:b149c52ae5ccbbe82abfb6",
  measurementId: "G-7E4LPT266H",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
