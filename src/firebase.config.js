import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGy4ABblIVu0kFMyfN7KM43U5oXOydlQ0",
  authDomain: "restaurantapp-5424e.firebaseapp.com",
  databaseURL: "https://restaurantapp-5424e-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-5424e",
  storageBucket: "restaurantapp-5424e.appspot.com",
  messagingSenderId: "830393119189",
  appId: "1:830393119189:web:d7a73d5df5a5a7c8304d5c",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
