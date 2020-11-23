/* eslint-disable default-case */
import React from "react";
import { VerticalSlider } from '../pages/small_components/VerticalSlider';


export class AmpEnv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            attack: (this.props.synth[0].get().envelope.attack * 1000),
            decay: (this.props.synth[0].get().envelope.decay * 1000),
            sustain: (this.props.synth[0].get().envelope.sustain * 1000),
            release: (this.props.synth[0].get().envelope.release * 1000)
        }


        this.adjustSliders = this.adjustSliders.bind(this);
    }


    adjustSliders(event, newValue) {

        if(event.target.className === "js-focus-visible" || event.target.parentElement.childNodes[2] === undefined) {
            return;
        }

        
        const name = event.target.parentElement.childNodes[2].name;
        //console.log(name);

        switch (name) {
            case "attack":
                this.props.synth.forEach(elm => {
                    elm.set({
                        envelope:
                            { attack: newValue / 1000 }
                    });
                });
                //this.setState({ attack: event.target.value });
                break;
            case "decay":
                this.props.synth.forEach(elm => {
                    elm.set({
                        envelope:
                            { decay: newValue / 1000 }
                    });
                });
                //this.setState({ decay: event.target.value });
                break;
            case "sustain":
                this.props.synth.forEach(elm => {
                    elm.set({
                        envelope:
                            { sustain: newValue / 1000 }
                    });
                });
              //this.setState({ sustain: event.target.value });
                break;
            case "release":
                this.props.synth.forEach(elm => {
                    elm.set({
                        envelope:
                            { release: newValue / 1000 }
                    });
                });
                //this.setState({ release: event.target.value });
                break;
        }
    }

    render() {
        return (
            <div className='amp-container'>
                <div className="adsr-slider">
                    <VerticalSlider name="attack" defaultValue={this.state.attack} min={0} max={7500} onChange={this.adjustSliders}/>
                    <p className="vertical-slider-label">ATTACK</p>
                </div>
                <div className="adsr-slider">
                    <VerticalSlider name="decay" defaultValue={this.state.decay} min={0} max={11000} onChange={this.adjustSliders}/>
                    <p className="vertical-slider-label">DECAY</p>
                </div>
                <div className="adsr-slider">
                    <VerticalSlider name="sustain" defaultValue={this.state.sustain} min={0} max={100} onChange={this.adjustSliders}/>
                    <p className="vertical-slider-label">SUSTAIN</p>
                </div>
                <div className="adsr-slider">
                    <VerticalSlider name="release" defaultValue={this.state.release} min={0} max={11000} onChange={this.adjustSliders}/>
                    <p className="vertical-slider-label">RELEASE</p>
                </div>
            </div>
        )
    }
}