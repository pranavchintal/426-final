import React from 'react';
import * as Tone from 'tone';
import { NoiseSynth, StateTimeline } from 'tone';


export class Port extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            portTime: 0
        };

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {

        this.props.synth.forEach(elm => {
            elm.set({portamento: event.target.value / 1000});
        });
        this.setState({portTime: event.target.value});
    }

    render() {


        return (<div className='container'>
            <div>
                <h1>Portamento</h1>
                <input name="port" type='range' min='0' max='3000' step='1' value={this.state.portTime} onChange={this.adjust}></input>
                <p>{this.state.portTime} ms</p>
            </div>
        </div>);
    }

}
