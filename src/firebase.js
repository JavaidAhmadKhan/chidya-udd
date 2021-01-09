import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDek3DsTjB1rvdtZrOeYXaUdLcEUnJ6a5c",
  authDomain: "chidya-udd-e9ba2.firebaseapp.com",
  projectId: "chidya-udd-e9ba2",
  storageBucket: "chidya-udd-e9ba2.appspot.com",
  messagingSenderId: "250426018517",
  appId: "1:250426018517:web:6493248c3f5caa44f4b05c",
  measurementId: "G-0J9B7NRJ7K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
