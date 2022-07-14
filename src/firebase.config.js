// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDMhY0JKAMHrvX2uA33tUHATuOaArkvGrs",
  authDomain: "amalgatedfs.firebaseapp.com",
  databaseURL: "https://amalgatedfs-default-rtdb.firebaseio.com",
  projectId: "amalgatedfs",
  storageBucket: "amalgatedfs.appspot.com",
  messagingSenderId: "607907867395",
  appId: "1:607907867395:web:a495ca0cfd5031949a1736",
  measurementId: "G-SETVLY5S2Q"
};

const app = getApps.legnth > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = getFirestore(app);
const storage = getStorage(app)

export {app, firestore, storage}