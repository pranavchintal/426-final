import React from "react";
import { OscillatorTest } from "./OscillatorTest.js";
import { AmpEnv } from "./AmpEnv.js";
import { FilterEnv } from "./FilterEnv.js"
import { Verb } from "./Verb.js";
import { Chorus } from "./Chorus.js";
import { Delay } from "./Delay.js";
import { Dist } from "./Dist.js";
import { Port } from "./Port.js";
import { BigBoySynth } from "./BigBoySynth.js";
import { BigBoyOptions } from "./BigBoyOptions.js";

import '../pages/stylesheets/SynthComponents.css';

export class TripleOsc extends React.Component {


    constructor(props) {

        super(props);
        this.synth = new BigBoySynth(new BigBoyOptions({}));
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);

    }

    handleKeyRelease(event) {
        this.synth.releaseNote(event);
    }


    handleKeyPress(event) {

        if(event.key === '1') {

            console.log(JSON.stringify(this.synth));
        }
        // event.persist();
        // console.log(event);

        this.synth.playNote(event);
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyPress} onKeyUp={this.handleKeyRelease} className="synth-body">
                <div className="oscillator-bank-text">
                    <span>
                        OSCILLATOR BANK
                    </span>
                </div>
                <div className="osc-bank">
                    <OscillatorTest synth={this.synth.voice1} oscNum="1" isMute={this.synth.isMute[0]} wholeSynth={this.synth}/>
                    <OscillatorTest synth={this.synth.voice2} oscNum="2" isMute={this.synth.isMute[1]} wholeSynth={this.synth}/>
                    <OscillatorTest synth={this.synth.voice3} oscNum="3" isMute={this.synth.isMute[2]} wholeSynth={this.synth}/>

                </div>
                <div className="envelopes">
                    <div className="amp-container-plus-label">
                        <div className="amp-label">
                            <span>
                                AMPLITUDE ENVELOPE
                            </span>
                        </div>
                        <AmpEnv synth={this.synth.voices} />
                    </div>
                    {/* <div className="fullwidth-break"></div> */}
                    <div className="filter-container-plus-label">
                        <div className="filter-label">
                            <span>
                                FILTER ENVELOPE
                            </span>
                        </div>
                        <FilterEnv synth={this.synth.voices} />
                    </div>
                </div>
                <div className="fx-label">
                    <span>
                        EFFECTS
                    </span>
                </div>
                <div className="fx">
                    <Dist synth={this.synth} />
                    <Delay synth={this.synth} />
                    <Chorus synth={this.synth} />
                    <Verb synth={this.synth} parentState={this.state} />
                    <Port synth={this.synth.voices} />
                </div>
            </div>
        )
    }
}