import { Landing } from './pages/Landing.js';
import { SynthBuilder } from './pages/SynthBuilder.js';
import { Knob, Pointer } from 'rc-knob';
import * as Tone from 'tone';
import { Button } from 'react-bootstrap'

import './App.css';



function App() {
  Tone.start();

  return (
    <div className="root">
      <Landing />
      <SynthBuilder />
    </div>
  );
}

export default App;
