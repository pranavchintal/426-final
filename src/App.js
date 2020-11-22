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
    fire.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(error.message)
            break;
          case 'auth/weak-password':
            setPasswordError(error.message)
            break;
        }
      })
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
        sethasAccount(true);
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
        passwordError={passwordError} />
      <SynthBuilder />
    </div>
  );
}

export default App;