/* eslint-disable default-case */
import { Landing } from './pages/Landing.js';
import { SynthBuilder } from './pages/SynthBuilder.js';
import * as Tone from 'tone';
import React, { useState, useEffect } from 'react';
import fire from './fire';

import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, sethasAccount] = useState(false);
  var db = fire.firestore();
  let tempEmail = "";


// Create an initial document to update.
// var frankDocRef = db.collection("users").doc("1Oa0XSgPyQN1EKxlTfJdrsN2VMB3");
// frankDocRef.set({
//     name: "Frank",
//     favorites: { food: "Pizza", color: "Blue", subject: "recess" },
//     age: 12
// });

// // To update age and favorite color:
// frankDocRef.update({
//     "age": 13,
//     "favorites.color": "Red"
// })
// .then(function() {
//     console.log("Document successfully updated!");
// });

  //var docRef = db.collection("users").doc().set({userPatches: []});

  //var docRef = db.collection("users").doc("1Oa0XSgPyQN1EKxlTfJdrsN2VMB3");

  // docRef.update({
  //   userPatches: fire.firestore.FieldValue.arrayUnion("greater_virginia")
  // });
  // docRef.get().then(function(doc) {
  //     if (doc.exists) {
  //       console.log(doc.data());
  //       //doc.update({userPatches: db.FieldValue.arrayUnion("test")      });
  //       //console.log("Document data:", doc.data().userPatches.push("hi"));

  //     } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //     }
  // }).catch(function(error) {
  //     console.log("Error getting document:", error);
  // });

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  const handleLogin = () => {
    clearErrors();
    tempEmail = email;
    fire.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(error.message)
            break;
          case 'auth/wrong-password':
            setPasswordError(error.message)
            break;
        }
      })

  };
  const handleSignUp = () => {
    clearErrors();
    tempEmail = email;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            setEmailError("A user already exists with this email address.")
            break;
          case 'auth/invalid-email':
            setEmailError("Invalid email.")
            break;
          case 'auth/weak-password':
            setPasswordError("Password must be at least 6 characters long.")
            break;
        }
      })
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(newUser => {
      if (newUser) {
        var docRef = db.collection("users").doc(newUser.uid);
        
        setUser(newUser);
        sethasAccount(true);
        docRef.get().then(docSnapshot => {
          if(docSnapshot.exists)
          {
            console.log(docRef.get());
          }
          else 
          {
            docRef.set({
              email : email
            })
          }
        })
        clearInputs();
      }
      else {
        setUser('');
        sethasAccount(false);
      }
    });
  };
  useEffect(() => {
    authListener();
  }, [])


  Tone.start();

  return (
    <div className="root">
      <Landing
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        sethasAccount={sethasAccount}
        emailError={emailError}
        passwordError={passwordError}
        isSignedIn={user} />
      <SynthBuilder handleLogout={handleLogout} isSignedIn={user} />
    </div>
  );
}

export default App;