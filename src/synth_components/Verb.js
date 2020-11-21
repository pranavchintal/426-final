/* eslint-disable default-case */
import React from 'react';

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
                <p>DECAY</p>
                <input name="decay" type='range' min='1' max='3000' step='1' value={this.state.displayCents} onChange={this.adjust}></input>
                <p>PREDELAY</p>
                <input name="predelay" type='range' min='0' max='1000' step='1' value={this.state.level} onChange={this.adjust}></input>
                <p>WET/DRY</p>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.level} onChange={this.adjust}></input>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}
