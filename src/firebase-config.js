import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBC5zLppWvkuNva2BVrGXYruO2MrgxbHE4",
    authDomain: "udevs-dashboard.firebaseapp.com",
    projectId: "udevs-dashboard",
    storageBucket: "udevs-dashboard.appspot.com",
    messagingSenderId: "224612714089",
    appId: "1:224612714089:web:f2299d312f30abef0084f8",
    measurementId: "G-K72M8YD5ZY"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore();