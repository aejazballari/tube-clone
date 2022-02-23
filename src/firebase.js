import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkX0mjQt1EPhoy9CKm1FD3pUu79Z6ffuk",
    authDomain: "clone-956ad.firebaseapp.com",
    projectId: "clone-956ad",
    storageBucket: "clone-956ad.appspot.com",
    messagingSenderId: "256796563256",
    appId: "1:256796563256:web:f2be6fb387522c85a4d3cd"
  };

  firebase.initializeApp(firebaseConfig)
  
  export default firebase.auth()