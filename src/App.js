import { Landing } from './pages/Landing.js';
import { SynthBuilder } from './pages/SynthBuilder.js';
import * as Tone from 'tone';

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