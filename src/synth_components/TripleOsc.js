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

    }

    handleKeyRelease(event) {
        this.props.synth.releaseNote(event);
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

        const newOpt = new BigBoyOptions(this.props.synth);
        

        //console.log(newOpt);

        let jsonOpt = JSON.stringify(newOpt, replacerFunc());

        const unJsonOpt = JSON.parse(jsonOpt);

        console.log(unJsonOpt);

        // const newSynth = new BigBoySynth(unJsonOpt);


        // console.log("New Synth: ");
        // console.log(newSynth);

    }

    handleKeyPress(event) {

        if(event.key === '1') {
            console.log(this.props.synth);
            //this.saveSynth();
        }
        // event.persist();
        // console.log(event);

        this.props.synth.playNote(event);
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
                    <OscillatorTest synth={this.props.synth.voice1} oscNum="1" isMute={this.props.synth.isMute[0]} wholeSynth={this.props.synth}/>
                    <OscillatorTest synth={this.props.synth.voice2} oscNum="2" isMute={this.props.synth.isMute[1]} wholeSynth={this.props.synth}/>
                    <OscillatorTest synth={this.props.synth.voice3} oscNum="3" isMute={this.props.synth.isMute[2]} wholeSynth={this.props.synth}/>

                </div>
                <div className="envelopes">
                    <div className="amp-container-plus-label">
                        <div className="amp-label">
                            <span>
                                AMPLITUDE ENVELOPE
                            </span>
                        </div>
                        <AmpEnv synth={this.props.synth.voices} />
                    </div>
                    {/* <div className="fullwidth-break"></div> */}
                    <div className="filter-container-plus-label">
                        <div className="filter-label">
                            <span>
                                FILTER ENVELOPE
                            </span>
                        </div>
                        <FilterEnv synth={this.props.synth.voices} />
                    </div>
                </div>
                <div className="fx-label">
                    <span>
                        EFFECTS
                    </span>
                </div>
                <div className="fx">
                    <Dist synth={this.props.synth} />
                    <Delay synth={this.props.synth} />
                    <Chorus synth={this.props.synth} />
                    <Verb synth={this.props.synth} parentState={this.state} />
                    <Port synth={this.props.synth.voices} />
                </div>
            </div>
        )
    }
}
