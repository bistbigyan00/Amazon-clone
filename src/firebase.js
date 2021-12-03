import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAYrM5XI2N68G_pUeu_52jKMOiYsw8MYi0",
    authDomain: "clone-c7ec2.firebaseapp.com",
    projectId: "clone-c7ec2",
    storageBucket: "clone-c7ec2.appspot.com",
    messagingSenderId: "477665953142",
    appId: "1:477665953142:web:f6f7ef3f8131f6808fe657"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  // const db = firebase.firestore();
  const auth = firebase.auth();

  export { auth };