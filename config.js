import * as firebase from 'firebase' 
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCzf6a2fOA_q8zPJV86l_ygvd9ExVtRGIk",
  authDomain: "library-authentication-wily.firebaseapp.com",
  databaseURL: "https://library-authentication-wily.firebaseio.com",
  projectId: "library-authentication-wily",
  storageBucket: "library-authentication-wily.appspot.com",
  messagingSenderId: "260395956354",
  appId: "1:260395956354:web:fd1c907d1e8dc213cc5c9b",
  measurementId: "G-9T5282XTKV"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();