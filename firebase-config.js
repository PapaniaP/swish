// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAU8Ve_1xLgvJQksCPjUWx-IfX_GSDoxMk",
	authDomain: "swish-cc699.firebaseapp.com",
	databaseURL: "https://swish-cc699-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "swish-cc699",
	storageBucket: "swish-cc699.appspot.com",
	messagingSenderId: "160512182072",
	appId: "1:160512182072:web:befed0aa8c1b374e4e23cd",
	measurementId: "G-8DH6MSJ7H0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
export const gamesRef = ref(database, "games");
