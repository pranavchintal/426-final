import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC3JfNmsafMHOJuEqr4Ga6PyT3Q2VXkmOQ",
    authDomain: "authenticatio-94821.firebaseapp.com",
    databaseURL: "https://authenticatio-94821.firebaseio.com",
    projectId: "authenticatio-94821",
    storageBucket: "authenticatio-94821.appspot.com",
    messagingSenderId: "104612480011",
    appId: "1:104612480011:web:f38a5ec03229ebc700330e"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;