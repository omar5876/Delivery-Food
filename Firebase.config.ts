import {initializeApp, getApp, getApps} from 'firebase/app';
import {Firestore, getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyALenC3ewVtiSjI7dd7_Gi-crna3bZymDM",
    authDomain: "deliver-food-app-54e9f.firebaseapp.com",
    databaseURL: "https://deliver-food-app-54e9f-default-rtdb.firebaseio.com",
    projectId: "deliver-food-app-54e9f",
    storageBucket: "deliver-food-app-54e9f.appspot.com",
    messagingSenderId: "975271985633",
    appId: "1:975271985633:web:e20b184d142d9562b5d2a0"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage}