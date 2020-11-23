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
            displayCents: this.props.wholeSynth.detuneVal[this.props.oscNum - 1],
            level: this.props.synth.get().volume > -10 ? -10 : this.props.synth.get().volume,
            mute: this.props.isMute,
            pitch: this.props.wholeSynth.pitch[this.props.oscNum - 1]

        };

        this.defaultLevel = this.state.level;
        this.defaultCents = this.state.displayCents;
        this.defaultPitch = this.state.pitch;

        this.pitch = this.state.pitch;
        this.level = this.state.level;
        this.cents = this.state.displayCents;


        this.changeOsc = this.changeOsc.bind(this);
        this.adjustSliders = this.adjustSliders.bind(this);
        this.adjustKnob = this.adjustKnob.bind(this);
        this.muteOsc = this.muteOsc.bind(this);
        this.preventDrag = this.preventDrag.bind(this);
        this.updateDefaults = this.updateDefaults.bind(this);
    }

    

    changeOsc(event) {

        switch (event.value) {
            case "square32":
                this.props.synth.set({
                    oscillator: {
                        type: "square32"
                    }
                });
                break;
            case "sine32":
                this.props.synth.set({
                    oscillator: {
                        type: "sine32"
                    }
                });
                break;
            case "saw32":
                this.props.synth.set({
                    oscillator: {
                        type: "sawtooth32"
                    }
                });
                break;
        }

    }

    updateDefaults() {
        console.log("updateDefaults called");
        this.defaultLevel = this.level;
        this.defaultCents = this.cents;
    }

    preventDrag(e) {
        e.preventDefault();
    }

    adjustKnob(value) {
        this.props.synth.set({detune: (value * 100) + this.cents});
        this.pitch = value;
        //this.setState({ pitch: value }, this.updateDefaults);
    }

    adjustSliders(event, newValue) {


        if(event.target.className === "js-focus-visible" || event.target.parentElement.childNodes[2] === undefined) {
            return;
        }

        
        //console.log(event);
        const name = event.target.parentElement.childNodes[2].name;

        switch (name) {
            case "cents":
                this.props.synth.set({detune: (this.pitch * 100) + newValue});
                //this.setState({ displayCents: newValue}, this.updateDefaults);
                this.cents = newValue;
                
                break;
            case "level":
                if (this.state.mute) break;
                this.props.synth.set({ volume: newValue });
                this.level = newValue;
                //this.setState({ level: newValue }, this.updateDefaults);
                break;    
        }
        
    }

    muteOsc() {
        this.props.wholeSynth.toggleMute(this.props.oscNum);
        this.setState({mute : !this.state.mute}, this.updateDefaults)
    }

    render() {

        let oscContainerClass = !this.state.mute ? "oscillator-container-active" : "oscillator-container-inactive";
        let oscLabelClass = !this.state.mute ? "osc-label-active" : "osc-label-inactive";
        let oscParamsVisibility = !this.state.mute ? "osc-params-visible" : "osc-params-invisible";
    

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
                    {/* <button onClick={this.changeOsc}>square32</button>
                    <button onClick={this.changeOsc}>sine32</button>
                    <button onClick={this.changeOsc}>saw32</button> */}
                </div>
                <div className={oscParamsVisibility}>
                <div className="detune-slider-and-label">
                    <div className="detune-slider">
                        <VerticalSlider name="cents" defaultValue={this.defaultCents} min={-100} max={100} onChange={this.adjustSliders} />
                    </div>
                    <p className="vertical-slider-label">DETUNE</p>
                </div>
                    <div className="wave-dropdown">
                        <Select options={OscillatorTest.options} styles={customStyles} defaultValue={OscillatorTest.options.find(elm => elm.value === this.props.synth.options.oscillator.type)} isSearchable={false} className="waveform-selector" onChange={this.changeOsc} />
                    </div>
                    <div className="pitch-knob" onMouseDown={this.preventDrag}>
                        <CircularSlider
                            width={42}
                            onChange={this.adjustKnob}
                            min={-12}
                            max={12}
                            knobPosition="left"
                            hideKnob={true}
                            trackColor="#917FA2"
                            progressColorFrom="#240046"
                            progressColorTo="#240046"
                            hideLabelValue={true}
                            dataIndex={this.pitch + 12}
                        />
                        <p className="knob-label">PITCH</p>
                    </div>

                    <div className="volume-slider">

                        <CustomizedSlider name='level' defaultValue={this.defaultLevel} min={OscillatorTest.levelMin} max={OscillatorTest.levelMax} onChange={this.adjustSliders}/>
                        <p>LEVEL</p>
                    </div>

                </div>
            </div>);
    }

}


OscillatorTest.levelMax = -10;
OscillatorTest.levelMin = -30;
OscillatorTest.defaultCents = 0;
OscillatorTest.defaultLevel = 0;
OscillatorTest.options = [
    { value: 'sine', label: <SineWave /> },
    { value: 'sawtooth', label: <SawWave /> },
    { value: 'square', label: <SquareWave /> }
]