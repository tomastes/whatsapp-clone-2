import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAGXTmXxneUqtrm8gq71-_3LABxlWpbRWI",
    authDomain: "whatsapp-clone-5d2d3.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-5d2d3.firebaseio.com",
    projectId: "whatsapp-clone-5d2d3",
    storageBucket: "whatsapp-clone-5d2d3.appspot.com",
    messagingSenderId: "808418233869",
    appId: "1:808418233869:web:93bed18c8324a8d43b0f44"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider} 
  export default db;