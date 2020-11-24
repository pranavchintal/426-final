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
        var docRef2 = db.collection("patch").doc(newUser.uid)
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
       
     docRef2.get().then(docSnapshot => {
        if(docSnapshot.exists)
        {
          console.log(docRef2.get());
        }
        else
        {
          docRef2.set({
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
      <SynthBuilder handleLogout={handleLogout} isSignedIn={user} user={user} email={email} />
    </div>
  );
}

export default App;