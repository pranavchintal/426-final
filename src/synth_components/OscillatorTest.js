/* eslint-disable default-case */
import React from 'react';
import Switch from "react-switch";
import Select from 'react-select';
import { ReactComponent as SawWave } from '../pages/icons/saw_wave.svg';
import { ReactComponent as SineWave } from '../pages/icons/sine_wave.svg';
import { ReactComponent as SquareWave } from '../pages/icons/square_wave.svg';
import CircularSlider from '@fseehawer/react-circular-slider';
import { CustomizedSlider } from '../pages/small_components/CustomizedSlider';
import { VerticalSlider } from '../pages/small_components/VerticalSlider';


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
        let oscParamsVisibility = !this.state.mute ? "osc-params-visible" : "osc-params-invisible";
        
        const options = [
            { value: 'sine32', label: <SineWave /> },
            { value: 'sawtooth32', label: <SawWave /> },
            { value: 'square32', label: <SquareWave /> }
        ]

        const customStyles = {
            option: (provided, state) => ({
                ...provided,
                border: "none",
                background: state.isFocused ? '#D3CCDA' : 'white',
                cursor: 'pointer',
                height: 50
            }),
            control: (provided, state) => ({
                // none of react-select's styles are passed to <Control />
                ...provided,
                background: 'none',
                border: 'none',
                width: 65,
                boxShadow: '0 0 0 0',
                cursor: 'pointer'
            }),
            indicatorSeparator: () => ({
                opacity: "0",
                width: 0,
            }),
            dropdownIndicator: (provided) => ({
                color: '#240046'
            }),
            valueContainer: (provided) => ({
                ...provided,
                height: 40,
            }),
            singleValue: (provided, state) => {
                const opacity = state.isDisabled ? 0.5 : 1;
                const transition = 'opacity 300ms';

                return { ...provided, opacity, transition };
            }
        }

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
                    {/* <button onClick={this.changeOsc}>Square</button>
                    <button onClick={this.changeOsc}>Sine</button>
                    <button onClick={this.changeOsc}>Saw</button> */}
                </div>
                <div className={oscParamsVisibility}>
                <div className="detune-slider-and-label">
                    <div className="detune-slider">
                        <VerticalSlider defaultValue={50} min={-100} max={100} />
                    </div>
                    <p className="vertical-slider-label">DETUNE</p>
                </div>
                    <div className="wave-dropdown">
                        <Select options={options} styles={customStyles} defaultValue={options[0]} isSearchable={false} className="waveform-selector" />
                    </div>
                    <div className="pitch-knob" onMouseDown={this.preventDrag}>
                        {/* <Knob
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
                        </Knob> */}
                        <CircularSlider
                            width={42}
                            onChange={value => { console.log(value); }}
                            min={-12}
                            max={12}
                            knobPosition="left"
                            hideKnob={true}
                            trackColor="#917FA2"
                            progressColorFrom="#240046"
                            progressColorTo="#240046"
                            hideLabelValue={true}
                        />
                        <p className="knob-label">PITCH</p>
                    </div>

                    {/* <input name="cents" type='range' min='-100' max='100' step='1' value={this.state.displayCents} onChange={this.adjust}></input> */}
                    <div className="volume-slider">

                        {/* <input name="level" type='range' min='-30' max='-10' step='1' value={this.state.level} onChange={this.adjust}></input> */}
                        <CustomizedSlider defaultValue={-15} min={-30} max={-10} />
                        <p>LEVEL</p>
                    </div>

                    {/* <button onClick={this.muteOsc}>Mute</button> */}
                </div>
            </div>);
    }

}

OscillatorTest.defaultCents = 0;
OscillatorTest.defaultLevel = 0;