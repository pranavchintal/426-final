import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';


export class Delay extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            delayTime: this.props.synth.delay.delayTime.value * 1000,
            feedback: this.props.synth.delay.feedback.value * 100,
            wet: this.props.synth.delay.wet.value * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.delay)
        };

        this.adjust = this.adjust.bind(this);
        this.mute = this.mute.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "delayTime":
                this.props.synth.delay.set({delayTime: event.target.value / 1000});
                this.setState({delayTime: event.target.value});
                break;
            case "feedback":
                this.props.synth.delay.set({feedback: event.target.value / 100});
                this.setState({feedback: event.target.value});
                break;
            // case "maxDelay":
            //     this.props.delay.set({maxDelay: event.target.value / 1000});
            //     this.setState({maxDelay: event.target.value});
            //     console.log(this.state.maxDelay);
            //     break;
            case "wet":
                this.props.synth.delay.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});                
        }
    }

    mute() {
        this.props.synth.toggleChain(this.props.synth.delay);
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
                <h1>Delay</h1>
                <h1>Delay Time</h1>
                <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                <p>{this.state.delayTime} ms</p>
                <h1>Feedback</h1>
                <input name="feedback" type='range' min='0' max='100' step='1' value={this.state.feedback} onChange={this.adjust}></input>
                <p>{this.state.feedback}</p>
                {/* <h1>Maximum Delay</h1>
                <input name="maxDelay" type='range' min='0' max='3000' step='1' value={this.state.maxDelay} onChange={this.adjust}></input>
                <p>{this.state.maxDelay} ms</p>                 */}
                <h1>Wet/Dry</h1>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.wet} onChange={this.adjust}></input>
                <p>{this.state.wet} % wet</p>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}
