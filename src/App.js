import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { OscillatorTest } from './OscillatorTest.js';
import * as Tone from 'tone';
import { Button } from 'react-bootstrap'
import { Oscillator } from 'tone';
import {TripleOsc} from "./TripleOsc.js"
import {AmpEnv} from "./AmpEnv.js"


function App() {

  // const synth1 = new Tone.Synth().toDestination();
  // synth1.oscillator.type = "sine32";
  Tone.start();

    return (
      <div className=".App">
        <TripleOsc />
      </div>
    );
  }
  export default App;


// function App() {
  
//   //const synth = new Tone.PolySynth(Tone.AMSynth).toDestination();

//   const synth = new Tone.Oscillator(440, "sine").toDestination().start();
  
  // let handleClick = (event) => {

  //   switch(event.target.id) {

  //     case 'C4':
  //       synth.triggerAttackRelease("C4", "8n");
  //       break;
  //     case 'C#4':
  //       synth.triggerAttackRelease("C#4", "8n");
  //       break;
  //     case 'D4':
  //       synth.triggerAttackRelease("D4", "8n");
  //       break;
  //     case 'D#4':
  //       synth.triggerAttackRelease("D#4", "8n");
  //       break;
  //     case 'E4':
  //       synth.triggerAttackRelease("E4", "8n");
  //       break;
  //     case 'F4':
  //       synth.triggerAttackRelease("F4", "8n");
  //       break;
  //     case 'F#4':
  //       synth.triggerAttackRelease("F#4", "8n");
  //       break;
  //     case 'G4':
  //       synth.triggerAttackRelease("G4", "8n");
  //       break;
  //     case 'G#4':
  //       synth.triggerAttackRelease("G#4", "8n");
  //       break;
  //     case 'A4':
  //       synth.triggerAttackRelease("A4", "8n");
  //       break;
  //     case 'A#4':
  //       synth.triggerAttackRelease("A#4", "8n");
  //       break;
  //     case 'B4':
  //       synth.triggerAttackRelease("B4", "8n");
  //       break;
  //     case 'C5':
  //       synth.triggerAttackRelease("C5", "8n");
  //       break;
  //     default:
  //       break;  
  //   }
  // }

    
//   }
//        return(
//         <html onKeyPress={handleKeyPress}>
//           <head>
//           <link
//             rel="stylesheet"
//             href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
//             integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
//             crossorigin="anonymous"
//           />
//           </head>
//           <body class="p-3 mb-2 bg-primary">
//             <div>
//               <h1 class="text-left display-1 text-white">
//                 Soundbites
//               </h1>
//               <p class="text-lg-left lead text-white">
//                 A simple, intuitive synth building and sequencing playground
//                 built for you to explore your musical side
//               </p>
//               <div class="btn-group mr-2" role="group" aria-label="First group">
//                 <button id="C4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>C</button>
//                 <button id="C#4" type="button" class="btn btn-secondary bg-dark" onClick={handleClick}>C#</button>
//                 <button id="D4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>D</button>
//                 <button id="D#4" type="button" class="btn btn-secondary bg-dark" onClick={handleClick}>D#</button>
//                 <button id="E4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>E</button>
//                 <button id="F4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>F</button>
//                 <button id="F#4" type="button" class="btn btn-secondary bg-dark" onClick={handleClick}>F#</button>
//                 <button id="G4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>G</button>
//                 <button id="G#4" type="button" class="btn btn-secondary bg-dark" onClick={handleClick}>G#</button>
//                 <button id="A4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>A</button>
//                 <button id="A#4" type="button" class="btn btn-secondary bg-dark" onClick={handleClick}>A#</button>
//                 <button id="B4" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>B</button>
//                 <button id="C5" type="button" class="btn btn-secondary bg-light text-dark" onClick={handleClick}>C</button>

//        <p class="text-light">Click on the keys to play a note or use your keyboard! (z = low C)</p>
//               </div>
              
//             </div>
//           </body>
//         </html>
//        );
// }

  