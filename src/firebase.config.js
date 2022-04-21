import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDGNku7iDK4Pzjj2go4FwcVuOb9f73OhDk",
  authDomain: "himalayansherpa-f13c5.firebaseapp.com",
  databaseURL: "https://himalayansherpa-f13c5-default-rtdb.firebaseio.com",
  projectId: "himalayansherpa-f13c5",
  storageBucket: "himalayansherpa-f13c5.appspot.com",
  messagingSenderId: "294885864321",
  appId: "1:294885864321:web:381a72a86a0eb5f768ee80"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };