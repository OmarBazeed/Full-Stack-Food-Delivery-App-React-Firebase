import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCBwuybRj2yrsKRjBdTC0QFUugyVTJV3dQ",
    authDomain: "restaurantapp-8c91b.firebaseapp.com",
    databaseURL: "https://restaurantapp-8c91b-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-8c91b",
    storageBucket: "restaurantapp-8c91b.appspot.com",
    messagingSenderId: "939701088788",
    appId: "1:939701088788:web:24b9d5b441996be7552d01",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };