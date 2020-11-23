/* eslint-disable default-case */
import React from "react";
import CircularSlider from '@fseehawer/react-circular-slider';
import { VerticalSlider } from '../pages/small_components/VerticalSlider';

export class FilterEnv extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cutoff: this.props.synth[0].options.filter.frequency,
            attack: (this.props.synth[0].get().filterEnvelope.attack * 1000),
            decay: this.props.synth[0].get().filterEnvelope.decay * 1000,
            sustain: this.props.synth[0].get().filterEnvelope.sustain * 100,
            release: this.props.synth[0].get().filterEnvelope.release * 1000,
            warp: this.props.synth[0].options.filter.Q
        }

        console.log(this.state.warp);
        console.log(this.state.cutoff);

        this.adjustWarp = this.adjustWarp.bind(this);
        this.adjustCutoff = this.adjustCutoff.bind(this);
        this.adjustSliders = this.adjustSliders.bind(this);
    }

    adjustWarp(value) {

        this.props.synth.forEach(elm => {
            elm.set({
                filter:
                    {Q: value}
            })
        })
    }

    adjustCutoff(value) {

        this.props.synth.forEach(elm => {
            elm.set({
                filterEnvelope: {
                    baseFrequency: value
                }
            });
        });                

    }

    adjustSliders(event, newValue) {

        if(event.target.className === "js-focus-visible" || event.target.parentElement.childNodes[2] === undefined) {
            return;
        }

        
        const name = event.target.parentElement.childNodes[2].name;

        switch (name) {
            case "attack":
                this.props.synth.forEach(elm => {
                    elm.set({
                        filterEnvelope:
                            { attack: newValue / 1000 }
                    });
                });
                break;
            case "decay":
                this.props.synth.forEach(elm => {
                    elm.set({
                        filterEnvelope:
                            { decay: newValue / 1000 }
                    });
                });
                break;
            case "sustain":
                this.props.synth.forEach(elm => {
                    elm.set({
                        filterEnvelope:
                            { sustain: newValue / 100 }
                    });
                });
                break;
            case "release":
                this.props.synth.forEach(elm => {
                    elm.set({
                        filterEnvelope:
                            { release: newValue / 1000 }
                    });
                });
                break;
        }
    }

    render() {
        return (
            <div className='filter-container'>
                <div className="filter-knobs">
                    <div className="filter-cutoff">
                        <CircularSlider
                            width={70}
                            onChange={this.adjustCutoff}
                            min={0}
                            max={20000}
                            knobPosition="bottom"
                            hideKnob={true}
                            trackColor="#654D7E"
                            progressColorFrom="#D3CCDA"
                            progressColorTo="#D3CCDA"
                            progressSize="20px"
                            hideLabelValue={true}
                            dataIndex={this.state.cutoff}
                        />
                        <p className="filter-knob-label">CUTOFF</p>
                    </div>
                    <div className="filter-warp">
                        <CircularSlider
                            width={70}
                            onChange={this.adjustWarp}
                            min={1}
                            max={5}
                            knobPosition="bottom"
                            hideKnob={true}
                            trackColor="#654D7E"
                            progressColorFrom="#D3CCDA"
                            progressColorTo="#D3CCDA"
                            progressSize="20px"
                            hideLabelValue={true}
                            dataIndex={this.state.warp}
                        />
                        <p className="filter-knob-label">WARP</p>
                    </div>
                </div>
                <div className="filter-slider">
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
