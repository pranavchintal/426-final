import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';


export class Verb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            decay: this.props.verb.decay * 1000,
            preDelay: this.props.verb.preDelay * 1000,
            wet: this.props.verb.wet.value * 100,
            isOn: false
        };

        console.log(this.props.verb.decay);
        console.log(this.props.verb.preDelay);
        //console.log(this.props.verb.wet);
        //console.log(Tone.Reverb.getDefaults().wet);

        this.adjust = this.adjust.bind(this);
        this.mute = this.mute.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "decay":
                //console.log(event.target.value);
                this.props.verb.set({decay: event.target.value / 1000});
                this.setState({decay: event.target.value});
                break;
            case "predelay":
                this.props.verb.set({preDelay: event.target.value / 1000});
                this.setState({preDelay: event.target.value});
                break;
            case "wet":
                this.props.verb.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});
                break;
            case "mute": {
            }
        }
    }

    mute() {
        this.setState({isOn: !this.state.isOn});
    }

    onOrOff() {
        if(this.state.isOn) {
            return "On";
        } else {
            return "Off";
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
