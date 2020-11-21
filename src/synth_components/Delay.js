/* eslint-disable default-case */
import React from 'react';
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
            case "wet":
                this.props.synth.delay.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});                
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <p>TIME</p>
                <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                <p>FEEDBACK</p>
                <input name="feedback" type='range' min='0' max='100' step='1' value={this.state.feedback} onChange={this.adjust}></input>            
                <p>WET/DRY</p>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.level} onChange={this.adjust}></input>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}
