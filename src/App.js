import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import * as Tone from 'tone';



function App() {
  
  const synth = new Tone.Synth().toDestination();

  let handleKeyPress = (event) => {

    switch(event.key) {
      case 'z':
        synth.triggerAttackRelease("C4", "8n");
        break;
      case 'x':
        synth.triggerAttackRelease("D4", "8n");
        break;
      case 'c':
        synth.triggerAttackRelease("E4", "8n");
        break;
      case 'v':
        synth.triggerAttackRelease("F4", "8n");
        break;
      case 'b':
        synth.triggerAttackRelease("G4", "8n");
        break;
      case 'n':
        synth.triggerAttackRelease("A4", "8n");
        break;
      case 'm':
        synth.triggerAttackRelease("B4", "8n");
        break;
      case ',':
        synth.triggerAttackRelease("C5", "8n");
        break;
      case 'a':
        synth.triggerAttackRelease("B3", "8n");
        break;
      case 's':
        synth.triggerAttackRelease("C#4", "8n");
        break;
      case 'd':
        synth.triggerAttackRelease("D#4", "8n");
        break;
      case 'g':
        synth.triggerAttackRelease("F#4", "8n");
        break;
      case 'h':
        synth.triggerAttackRelease("G#4", "8n");
        break;
      case 'j':
        synth.triggerAttackRelease("A#4", "8n");
        break;
      default:
        break;   
    }
    
  }
       return(
           <div>
             <input type="text" id="one" onKeyPress={handleKeyPress} />
          </div>
       );
}

export default App;
