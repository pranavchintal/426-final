import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';
import classNames from "classnames";


export class OscillatorTest extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.synth.get().volume);

        this.state = {
            displayCents: this.props.synth.get().detune,
            level: this.props.synth.get().volume,
            mute: false,
            classes: classNames('container')
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
            this.props.synth.set({volume: -200});
            this.setState({classes: classNames("container", "not-active")});
        } else {
            this.setState({mute: false});
            this.props.synth.set({volume: this.state.level});
            this.setState({classes: classNames("container")});
        }
    }

    render() {


        return (<div className={this.state.classes}>
            <h1>Osc</h1>
            <div>
                <button onClick={this.changeOsc}>Square</button>
                <button onClick={this.changeOsc}>Triangle</button>
                <button onClick={this.changeOsc}>Sine</button>
                <button onClick={this.changeOsc}>Sawtooth</button>
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
OscillatorTest.defaultLevel = -15;