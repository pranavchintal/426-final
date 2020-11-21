import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';


export class Verb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            decay: this.props.synth.verb.decay * 1000,
            preDelay: this.props.synth.verb.preDelay * 1000,
            wet: this.props.synth.verb.wet.value * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.verb),
        };


        this.adjust = this.adjust.bind(this);
        this.mute = this.mute.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "decay":
                //console.log(event.target.value);
                this.props.synth.verb.set({decay: event.target.value / 1000});
                this.setState({decay: event.target.value});
                break;
            case "predelay":
                this.props.synth.verb.set({preDelay: event.target.value / 1000});
                this.setState({preDelay: event.target.value});
                break;
            case "wet":
                this.props.synth.verb.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});
                break;
            case "mute": {
            }
        }
    }

    mute() {
        this.props.synth.toggleChain(this.props.synth.verb);
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
                <h1>Reverb</h1>
                <h1>Decay</h1>
                <input name="decay" type='range' min='1' max='3000' step='1' value={this.state.decay} onChange={this.adjust}></input>
                <p>{this.state.decay} ms</p>
                <h1>Predelay</h1>
                <input name="predelay" type='range' min='0' max='1000' step='1' value={this.state.preDelay} onChange={this.adjust}></input>
                <p>{this.state.preDelay} ms</p>
                <h1>Wet/Dry</h1>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.wet} onChange={this.adjust}></input>
                <p>{this.state.wet} % wet</p>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}
