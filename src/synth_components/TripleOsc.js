import React from "react";
import * as Tone from 'tone';
import { OscillatorTest } from "./OscillatorTest.js";
import { AmpEnv } from "./AmpEnv.js";
import { FilterEnv } from "./FilterEnv.js"
import { Verb } from "./Verb.js";
import { Chorus } from "./Chorus.js";
import { Delay } from "./Delay.js";
import { Dist } from "./Dist.js";
import { Port } from "./Port.js";

export class TripleOsc extends React.Component {


    constructor(props) {

        super(props);
        this.synthArr = [];
        this.cutoffEnv = new Tone.Envelope();
        this.filter = new Tone.Filter(10000, "lowpass");
        this.chorus = new Tone.Chorus();
        this.verb = new Tone.Reverb();
        this.delay = new Tone.FeedbackDelay();
        this.dist = new Tone.Distortion();
        for (let i = 0; i < TripleOsc.oscNum; i++) {
            this.synthArr.push(new Tone.PolySynth(Tone.MonoSynth).chain(this.filter, this.chorus, this.verb, this.delay, this.dist, Tone.Destination));
            this.synthArr[i].set({ volume: -15 });
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);

    }

    handleKeyRelease(event) {
        this.synthArr.forEach(synth => synth.triggerRelease(TripleOsc.keyNoteMap[event.keyCode]));
    }


    handleKeyPress(event) {
        if (!event.repeat && TripleOsc.keyNoteMap[event.keyCode] !== undefined) {
            this.synthArr.forEach(synth => synth.triggerAttack(TripleOsc.keyNoteMap[event.keyCode]));
        } else if (event.key === "1") {
            this.synthArr.forEach(synth => synth.releaseAll());
        }
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyPress} onKeyUp={this.handleKeyRelease}>
                <OscillatorTest synth={this.synthArr[0]} oscNum="1" mutedOnLoad={false} />
                <OscillatorTest synth={this.synthArr[1]} oscNum="2" mutedOnLoad={true} />
                <OscillatorTest synth={this.synthArr[2]} oscNum="3" mutedOnLoad={true} />
                <div className="amp-container">
                    <p>VCA</p>
                    <AmpEnv synth={this.synthArr} />
                </div>
                <div className="filter-container">
                    <p>FILTER</p>
                    <FilterEnv env={this.cutoffEnv} filter={this.filter} />
                </div>
                <div className="fx-container">
                    <p>REVERB</p>
                    <Verb verb={this.verb} />
                </div>
                <div className="fx-container">
                    <p>CHORUS</p>
                    <Chorus chorus={this.chorus} />
                </div>
                <div className="fx-container">
                    <p>DELAY</p>
                    <Delay delay={this.delay} />
                </div>
                <div className="fx-container">
                    <p>DIST</p>
                    <Dist dist={this.dist} />
                </div>
                <Port synth={this.synthArr} />
            </div>
        )
    }
}

TripleOsc.oscNum = 3;

TripleOsc.keyNoteMap = {
    90: "C4",
    88: "D4",
    67: "E4",
    86: "F4",
    66: "G4",
    78: "A4",
    77: "B4",
    188: "C5",
    190: "D5",
    191: "E5",
    76: "C#5",
    186: "D#5",
    83: "C#4",
    68: "D#4",
    71: "F#4",
    72: "G#4",
    74: "A#4",
    81: "C5",
    87: "D5",
    69: "E5",
    82: "F5",
    84: "G5",
    89: "A5",
    85: "B5",
    73: "C6",
    50: "C#5",
    51: "D#5",
    53: "F#5",
    54: "G#5",
    55: "A#5",
    79: "D6",
    80: "E6",
    219: "F6",
    221: "G6",
    57: "C#6",
    48: "D#6",
    187: "F#6"
}