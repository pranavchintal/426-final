import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';


export class Dist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            distortion: this.props.synth.dist.distortion * 100,
            wet: this.props.synth.dist.wet.value * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.dist)
        };

        this.adjust = this.adjust.bind(this);
        this.mute = this.mute.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "distortion":
                this.props.synth.dist.set({distortion: event.target.value / 100});
                this.setState({distortion: event.target.value});
                break;
            case "oversample":
                this.props.synth.dist.set({oversample: event.taget.value});
                this.setState({oversample: event.target.value});
                break;
            case "wet":
                this.props.synth.dist.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});
                break;
        }
    }

    mute() {
        this.props.synth.toggleChain(this.props.synth.dist);
        this.setState({isOn: !this.state.isOn});
    }

    onOrOff() {
        if(this.state.isOn) {
            return "Off";
        } else {
            return "On";
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <h1>Distortion</h1>
                <h1>Distortion</h1>
                <input name="distortion" type='range' min='0' max='100' step='1' value={this.state.distortion} onChange={this.adjust}></input>
                <p>{this.state.distortion} ms</p>
                {/* <h1>Predelay</h1>
                <input name="oversample
" type='range' min='0' max='1000' step='1' value={this.state.level} onChange={this.adjust}></input>
                <p>{this.state.oversample} ms</p> */}
                <h1>Wet/Dry</h1>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.wet} onChange={this.adjust}></input>
                <p>{this.state.wet} % wet</p>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}
