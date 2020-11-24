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
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyRelease = this.handleKeyRelease.bind(this);
        this.state = {synth: this.props.synth};

        this.panic = this.panic.bind(this);

    }

    handleKeyRelease(event) {
        this.state.synth.releaseNote(event);
    }

    saveSynth() {
        const replacerFunc = () => {
            const visited = new WeakSet();
            return (key, value) => {
              if (typeof value === "object" && value !== null) {
                if (visited.has(value)) {
                  return;
                }
                visited.add(value);
              }
              return value;
            };
          };
          
        console.log("Old Synth: ");
        
        const newOpt = new BigBoyOptions(this.state.synth);
        

        console.log(newOpt);
        let jsonOpt = JSON.stringify(newOpt, replacerFunc());

        const unJsonOpt = JSON.parse(jsonOpt);

        //console.log(unJsonOpt);


    }

    panic() {
        this.state.synth.panic();
    }

    handleKeyPress(event) {

        if(event.key === '1') {
            this.setState({synth: this.props.synth});
            console.log(this.state.synth);
        }


        this.state.synth.playNote(event);
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
                    <button onClick={this.panic}>Panic!</button>
                    <OscillatorTest synth={this.state.synth.voice1} oscNum="1" isMute={this.state.synth.isMute[0]} wholeSynth={this.state.synth}/>
                    <OscillatorTest synth={this.state.synth.voice2} oscNum="2" isMute={this.state.synth.isMute[1]} wholeSynth={this.state.synth}/>
                    <OscillatorTest synth={this.state.synth.voice3} oscNum="3" isMute={this.state.synth.isMute[2]} wholeSynth={this.state.synth}/>

                </div>
                <div className="envelopes">
                    <div className="amp-container-plus-label">
                        <div className="amp-label">
                            <span>
                                AMPLITUDE ENVELOPE
                            </span>
                        </div>
                        <AmpEnv synth={this.state.synth.voices} />
                    </div>
                    <div className="filter-container-plus-label">
                        <div className="filter-label">
                            <span>
                                FILTER ENVELOPE
                            </span>
                        </div>
                        <FilterEnv synth={this.state.synth.voices} />
                    </div>
                </div>
                <div className="fx-label">
                    <span>
                        EFFECTS
                    </span>
                </div>
                <div className="fx">
                    <Dist synth={this.state.synth} />
                    <Delay synth={this.state.synth} />
                    <Chorus synth={this.state.synth} />
                    <Verb synth={this.state.synth} parentState={this.state} />
                    <Port synth={this.state.synth.voices} />
                </div>
            </div>
        )
    }
}
