import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
    apiKey: "AIzaSyD68Wp8-Jk1LhxLC2HTUXg5GW6EhLYdXqY",
    authDomain: "karlsapp.firebaseapp.com",
    projectId: "karlsapp",
    storageBucket: "karlsapp.appspot.com",
    messagingSenderId: "700439594124",
    appId: "1:700439594124:web:133617c8f5ecbd352727a9",
    measurementId: "G-1WSVSX1NQ7"
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyAmiq-MUeRD6eEU9lNyqdMTXseOp4uE9nA",
    authDomain: "whatsapp-clone-267ad.firebaseapp.com",
    projectId: "whatsapp-clone-267ad",
    storageBucket: "whatsapp-clone-267ad.appspot.com",
    messagingSenderId: "982910891739",
    appId: "1:982910891739:web:2c3a2bbb8ddbf080d93efe",
    measurementId: "G-7K7KXWL8C7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider }
export default db;

