/* eslint-disable default-case */
import React from 'react';

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

    mute() {
        this.props.synth.toggleChain(this.props.synth.dist);
        this.setState({ isOn: !this.state.isOn });
    }

    onOrOff() {
        if (this.state.isOn) {
            return "Off";
        } else {
            return "On";
        }
    }

    adjust(event) {
        switch(event.target.name) {
            case "distortion":
                this.props.synth.dist.set({distortion: event.target.value / 100});
                this.setState({distortion: event.target.value});
                break;
            case "wet":
                this.props.synth.dist.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});
                break;
        }
    }

    render() {

        return (<div className='container'>
            <div>
                <p>AMOUNT</p>
                <input name="distortion" type='range' min='0' max='100' step='1' value={this.state.distortion} onChange={this.adjust}></input>
                <p>WET/DRY</p>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.wet} onChange={this.adjust}></input>
                <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
            </div>
        </div>);
    }

}
