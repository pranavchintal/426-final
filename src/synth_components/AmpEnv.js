/* eslint-disable default-case */
import React from "react";
export class AmpEnv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            attack: (this.props.synth[0].get().envelope.attack * 1000),
            decay: (this.props.synth[0].get().envelope.decay * 1000),
            sustain: (this.props.synth[0].get().envelope.sustain * 1000),
            release: (this.props.synth[0].get().envelope.release * 1000)
        }


        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {
        
        switch(event.target.name) {
            case "attack":
                this.props.synth.forEach(elm => {
                    elm.set({envelope:
                        {attack: event.target.value / 1000}
                    });
                });
                this.setState({attack: event.target.value});
                break;
            case "decay":
                this.props.synth.forEach(elm => {
                    elm.set({envelope:
                        {decay: event.target.value / 1000}
                    });
                });                
                this.setState({decay: event.target.value});
                break;
            case "sustain":
                this.props.synth.forEach(elm => {
                    elm.set({envelope:
                        {sustain: event.target.value / 1000}
                    });
                });                
                this.setState({sustain: event.target.value});
                break;
            case "release":
                this.props.synth.forEach(elm => {
                    elm.set({envelope:
                        {release: event.target.value / 1000}
                    });
                });                
                this.setState({release: event.target.value});
                break;
        }
    }

    render() {
        return (
        <div className='container'>
            <p>ATTACK</p>
            <input onChange={this.adjust} name='attack' type='range' min='0' max='1000' step='1' value={this.state.attack}></input>
            <p>DECAY</p>
            <input onChange={this.adjust} name='decay' type='range' min='0' max='1000' step='1' value={this.state.decay}></input>
            <p>SUSTAIN</p>
            <input onChange={this.adjust} name='sustain' type='range' min='0' max='1000' step='1' value={this.state.sustain}></input>
            <p>RELEASE</p>
            <input onChange={this.adjust} name='release' type='range' min='0' max='1000' step='1' value={this.state.release}></input>     
        </div>
        )
    }
}