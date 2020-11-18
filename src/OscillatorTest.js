import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';

// export function OscillatorTest() {

//     const synth = new Tone.Synth().toDestination();
//     synth.oscillator.type = "sine32";

//     return (<div>this works</div>);
// }

export class OscillatorTest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayCents: OscillatorTest.defaultCents,
            level: OscillatorTest.defaultLevel,
            keyPressed: false,
            mute: false
        };

        this.changeOsc = this.changeOsc.bind(this);
        this.adjust = this.adjust.bind(this);
        this.muteOsc = this.muteOsc.bind(this);
    }

    changeOsc(event) {
        switch(event.target.textContent) {
            case "Square":
                this.props.synth.set({oscillator: {
                    type: "square32"
                }}); 
                break;
            case "Triangle":
                this.props.synth.set({oscillator: {
                    type: "triangle32"
                }});                 
                break;
            case "Sine":
                this.props.synth.set({oscillator: {
                    type: "sine32"
                }}); 
                break;
            case "Sawtooth": 
                this.props.synth.set({oscillator: {
                    type: "sawtooth32"
                }});
                break; 
        }
    }

    adjust(event) {
        switch(event.target.name) {
            case "cents":
                //console.log(event.target.value);
                this.props.synth.set({detune: event.target.value});
                this.setState({displayCents: event.target.value});
                break;
            case "level":
                if(this.state.mute) break;
                this.props.synth.set({volume: event.target.value});
                this.setState({level: event.target.value});
                break;
        }
    }

    muteOsc() {
        if(!this.state.mute) {
            this.setState({mute: true});
            this.props.synth.set({volume: -200})
        } else {
            this.setState({mute: false});
            this.props.synth.set({volume: this.state.level});
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <button onClick={this.changeOsc}>Square</button>
                <button onClick={this.changeOsc}>Triangle</button>
                <button onClick={this.changeOsc}>Sine</button>
                <button onClick={this.changeOsc}>Noise</button>
            </div>
            <div>
                <h1>Detune</h1>
                <input name="cents" type='range' min='-100' max='100' step='1' value={this.state.displayCents} onChange={this.adjust}></input>
                <p>{this.state.displayCents}</p>
                <h1>Level</h1>
                <input name="level" type='range' min='-30' max='0' step='1' value={this.state.level} onChange={this.adjust}></input>
                <p>{this.state.level} db</p>
                <button onClick={this.muteOsc}>Mute</button>
            </div>
        </div>);
    }

}


OscillatorTest.defaultCents = 0;
OscillatorTest.defaultLevel = 0;