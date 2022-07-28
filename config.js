import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAGXYw5rtv73TM4-2GGGP06P-HcaxburFQ",
  authDomain: "project-71-19e4a.firebaseapp.com",
  projectId: "project-71-19e4a",
  storageBucket: "project-71-19e4a.appspot.com",
  messagingSenderId: "804933787403",
  appId: "1:804933787403:web:a20f9794c4f761c6fd0c0e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
