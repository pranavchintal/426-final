import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Tone from 'tone';

console.log(this);

// const testSynth = new Tone.MonoSynth().toDestination();
// //testSynth.triggerAttackRelease("C4", "8n");
// document.addEventListener("keydown", (event) => {
//   console.log(event.repeat);
//   if(!event.repeat) {
//     console.log("key press");
//     testSynth.triggerAttack("C4");
//   }
// });

// document.addEventListener("keyup", () => {
//   testSynth.triggerRelease();
// })

ReactDOM.render(

  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
