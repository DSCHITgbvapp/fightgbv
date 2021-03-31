import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK-pRduv_8mCBpWNh-XS2TP1NLDGuDF1E",
  authDomain: "confidant-zw.firebaseapp.com",
  projectId: "confidant-zw",
  storageBucket: "confidant-zw.appspot.com",
  messagingSenderId: "816392708329",
  appId: "1:816392708329:web:915912a75e07c4fbded078",
  measurementId: "G-65HD8CVR52",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
