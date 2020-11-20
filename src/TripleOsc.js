import React from "react";
import * as Tone from 'tone';
import { NoiseSynth, PolySynth } from "tone";
import {OscillatorTest} from "./OscillatorTest.js";
import {AmpEnv} from "./AmpEnv.js";
import {FilterEnv} from "./FilterEnv.js"
import {Verb} from "./Verb.js";
import {Chorus} from "./Chorus.js";
import {Delay} from "./Delay.js";
import {Dist} from "./Dist.js";
import {Port} from "./Port.js";
import {BigBoySynth} from "./BigBoySynth.js";
import { BigBoyOptions } from "./BigBoyOptions.js";

export class TripleOsc extends React.Component {


    constructor(props) {

        super(props);
        //this.synthArr = [];

        this.synth = new BigBoySynth(new BigBoyOptions({}));

        // this.synthArr.push(new Tone.DuoSynth().toDestination());
        // this.synthArr[0].harmonicity.value = 1;
        //this.synthArr.push(new Tone.NoiseSynth());
        // this.ampEnv = new Tone.AmplitudeEnvelope({
            //     attack: 0,
            //     decay: 0,
            //     sustain: 0,
            //     release: 0
            // }).toDestination();
        this.cutoffEnv = new Tone.Envelope();
        // this.filter = new Tone.Filter(10000, "lowpass");
        // this.chorus = new Tone.Chorus();
        // this.verb = new Tone.Reverb();
        // this.delay = new Tone.FeedbackDelay();
        // this.dist = new Tone.Distortion();

        // this.state = {
        //     chain: [this.filter, this.chorus, this.verb, this.delay, this.dist, Tone.Destination],
        // }
        // for(let i = 0; i < TripleOsc.oscNum; i++) {
        //     this.synthArr.push(new Tone.PolySynth(Tone.MonoSynth).connect(this.filter).connect(this.chorus).connect(this.verb));
        //     this.synthArr.push(new Tone.PolySynth(Tone.MonoSynth).chain(...this.state.chain));
        //     this.synthArr[i].set({volume: -15});
        // }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);

    }
    
    handleKeyRelease(event) {
        //this.synthArr.forEach(synth => synth.triggerRelease(TripleOsc.keyNoteMap[event.keyCode]));
        this.synth.releaseNote(event);
    }


    handleKeyPress(event) {
        // if(!event.repeat && TripleOsc.keyNoteMap[event.keyCode] !== undefined) {
        //     this.synth.playNote(event);
        //     //this.synthArr.forEach(synth => synth.triggerAttack(TripleOsc.keyNoteMap[event.keyCode]));
        //     //this.ampEnv.triggerAttack();
        // } else if(event.key == "1") {
        //     this.synthArr.forEach(synth => synth.releaseAll());
        // }
        this.synth.playNote(event);
      }

    render() {
        return (
            <div onKeyDown={this.handleKeyPress} onKeyUp={this.handleKeyRelease}>
            {/* <div> */}
                <OscillatorTest synth={this.synth.voice1} />
                <OscillatorTest synth={this.synth.voice2} />
                <OscillatorTest synth={this.synth.voice3} />
                <AmpEnv synth={[this.synth.voice1, this.synth.voice2, this.synth.voice3]} />
                <FilterEnv env={this.cutoffEnv} filter={this.synth.filter} />
                <Verb verb={this.synth.verb} parentState={this.state}/>
                <Chorus chorus={this.synth.chorus} />
                <Delay delay={this.synth.delay}/>
                <Dist dist={this.synth.dist} />
                <Port synth={[this.synth.voice1, this.synth.voice2, this.synth.voice3]} />
                
                {/* <NoiseOsc synth={this.synthArr[2]} /> */}
            </div>
        )
    }
}

TripleOsc.oscNum = 3;

// TripleOsc.keyNoteMap = {
//     90: "C4",
//     88: "D4",
//     67: "E4",
//     86: "F4",
//     66: "G4",
//     78: "A4",
//     77: "B4",
//     188: "C5",
//     190: "D5",
//     191: "E5",
//     76: "C#5",
//     186: "D#5",
//     83: "C#4",
//     68: "D#4",
//     71: "F#4",
//     72: "G#4",
//     74: "A#4",
//     81: "C5",
//     87: "D5",
//     69: "E5",
//     82: "F5",
//     84: "G5",
//     89: "A5",
//     85: "B5",
//     73: "C6",
//     50: "C#5",
//     51: "D#5",
//     53: "F#5",
//     54: "G#5",
//     55: "A#5",
//     79: "D6",
//     80: "E6",
//     219: "F6",
//     221: "G6",
//     57: "C#6",
//     48: "D#6",
//     187: "F#6"
// }