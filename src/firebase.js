import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDlQ5ymeeq6vrzJkIoJSxBWF3-theZpipU",
    authDomain: "netflix-5bc37.firebaseapp.com",
    projectId: "netflix-5bc37",
    storageBucket: "netflix-5bc37.appspot.com",
    messagingSenderId: "815951885059",
    appId: "1:815951885059:web:888c2677f4b5cf5c182f36",
    measurementId: "G-7C915MY6LD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;