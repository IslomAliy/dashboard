import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcUIE5KaGeHAlMoW7RFLQe6DEYw4cHAyk",
    authDomain: "udevs-fourth.firebaseapp.com",
    projectId: "udevs-fourth",
    storageBucket: "udevs-fourth.appspot.com",
    messagingSenderId: "765009537668",
    appId: "1:765009537668:web:7efb669f65c2b05a18f0d1",
    measurementId: "G-M270P1TJ0D"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();