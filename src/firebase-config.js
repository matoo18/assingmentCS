import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDIBinIaTy37aQMEIv94ON6tdhwr7VmStA",
  authDomain: "cfa-y3-last-assignment.firebaseapp.com",
  projectId: "cfa-y3-last-assignment",
  storageBucket: "cfa-y3-last-assignment.appspot.com",
  messagingSenderId: "357869361913",
  appId: "1:357869361913:web:4a228e6338a609c279a028",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
