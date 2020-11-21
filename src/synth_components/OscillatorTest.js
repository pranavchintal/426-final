/* eslint-disable default-case */
import React from 'react';
import { Knob, Pointer } from 'rc-knob';
import Switch from "react-switch";
import Select from 'react-select';
import {ReactComponent as SawWave} from '../pages/icons/saw_wave.svg';
import {ReactComponent as SineWave} from '../pages/icons/sine_wave.svg';
import {ReactComponent as SquareWave} from '../pages/icons/square_wave.svg';


import '../pages/stylesheets/SynthComponents.css';

export class OscillatorTest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayCents: this.props.synth.get().detune,
            level: this.props.synth.get().volume,
            mute: this.props.mutedOnLoad
        };

        this.changeOsc = this.changeOsc.bind(this);
        this.adjust = this.adjust.bind(this);
        this.muteOsc = this.muteOsc.bind(this);
        this.preventDrag = this.preventDrag.bind(this);
    }

    changeOsc(event) {
        switch (event.target.textContent) {
            case "Square":
                this.props.synth.set({
                    oscillator: {
                        type: "square32"
                    }
                });
                break;
            // case "Triangle":
            //     this.props.synth.set({
            //         oscillator: {
            //             type: "triangle32"
            //         }
            //     });
            //     break;
            case "Sine":
                this.props.synth.set({
                    oscillator: {
                        type: "sine32"
                    }
                });
                break;
            case "Saw":
                this.props.synth.set({
                    oscillator: {
                        type: "sawtooth32"
                    }
                });
                break;
        }
    }

    preventDrag(e) {
        e.preventDefault();
    }

    adjust(event) {
        switch (event.target.name) {
            case "cents":
                this.props.synth.set({ detune: event.target.value });
                this.setState({ displayCents: event.target.value });
                break;
            case "level":
                if (this.state.mute) break;
                this.props.synth.set({ volume: event.target.value });
                this.setState({ level: event.target.value });
                break;
        }
    }

    muteOsc() {
        if (!this.state.mute) {
            this.setState({ mute: true });
            this.props.synth.set({ volume: -200 })
        } else {
            this.setState({ mute: false });
            this.props.synth.set({ volume: this.state.level });
        }
        console.log(this.state.mute);
    }

    render() {

        let oscContainerClass = !this.state.mute ? "oscillator-container-active" : "oscillator-container-inactive";
        let oscLabelClass = !this.state.mute ? "osc-label-active" : "osc-label-inactive";
        const options = [
            { value: 'sawtooth32', label: <SawWave /> },
            { value: 'sine32', label: <SineWave /> },
            { value: 'square32', label: <SquareWave /> }
          ]

        return (
            <div className={oscContainerClass}>
                <p className={oscLabelClass}>OSC {this.props.oscNum}</p>
                <label>
                        <Switch 
                            onChange={this.muteOsc} 
                            checked={!this.state.mute}
                            offColor="#D3CCDA" 
                            onColor="#917FA2"
                            onHandleColor="#240046"
                            handleDiameter={20}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                            height={14}
                            width={34}
                            className="osc-switch"
                            />
                    </label>
                <div>
                    <button onClick={this.changeOsc}>Square</button>
                    {/* <button onClick={this.changeOsc}>Triangle</button> */}
                    <button onClick={this.changeOsc}>Sine</button>
                    <button onClick={this.changeOsc}>Saw</button>
                </div>
                <div>
                    <div className="detune-knob" onMouseDown={this.preventDrag}>
                        <Knob
                            size={42}
                            angleOffset={220}
                            angleRange={280}
                            min={-100}
                            max={100}
                            className="styledKnob"
                            onChange={value => console.log(value)}
                        >
                            <circle r="21" cx="21" cy="21" />
                            <Pointer
                                width={2}
                                height={21}
                                radius={0}
                                type="rect"
                                color="#fff"
                            />
                        </Knob>
                        <p className="knob-label">DETUNE</p>
                    </div>
                    <Select options={options} className="waveform-selector"/>
                    {/* <input name="cents" type='range' min='-100' max='100' step='1' value={this.state.displayCents} onChange={this.adjust}></input> */}
                    <p>LEVEL</p>
                    <input name="level" type='range' min='-30' max='-10' step='1' value={this.state.level} onChange={this.adjust}></input>

                    {/* <button onClick={this.muteOsc}>Mute</button> */}
                </div>
            </div>);
    }

}

OscillatorTest.defaultCents = 0;
OscillatorTest.defaultLevel = 0;