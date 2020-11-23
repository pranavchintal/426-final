/* eslint-disable default-case */
import React from 'react';
import Switch from "react-switch";
import CircularSlider from '@fseehawer/react-circular-slider';

export class Verb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            decay: this.props.synth.verb.decay * 1000,
            preDelay: this.props.synth.verb.preDelay * 1000,
            wet: this.props.synth.verb.get().wet * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.verb),
        };



        this.adjust1 = this.adjust1.bind(this);
        this.adjust2 = this.adjust2.bind(this);
        this.adjust3 = this.adjust3.bind(this);
        this.mute = this.mute.bind(this);
    }


    adjust1(value) {
        this.props.synth.verb.set({ decay: value / 1000 });
    }
    
    adjust2(value) {
        this.props.synth.verb.set({ preDelay: value / 1000 });

    }

    adjust3(value) {
        this.props.synth.verb.set({ wet: value / 100 });
    }


    // adjust(event) {
    //     switch (event.target.name) {
    //         case "decay":
    //             //console.log(event.target.value);
    //             this.props.synth.verb.set({ decay: event.target.value / 1000 });
    //             this.setState({ decay: event.target.value });
    //             break;
    //         case "predelay":
    //             this.props.synth.verb.set({ preDelay: event.target.value / 1000 });
    //             this.setState({ preDelay: event.target.value });
    //             break;
    //         case "wet":
    //             this.props.synth.verb.set({ wet: event.target.value / 100 });
    //             this.setState({ wet: event.target.value });
    //             break;
    //         case "mute": {
    //         }
    //     }
    // }
    mute() {
        this.props.synth.toggleChain(this.props.synth.verb);
        this.setState({ isOn: !this.state.isOn });
    }

    onOrOff() {
        if (this.state.isOn) {
            return "Off";
        } else {
            return "On";
        }
    }

    render() {

        let fxContainerClass = this.state.isOn ? "fx-container-active" : "fx-container-inactive";
        let fxLabelClass = this.state.isOn ? "osc-label-active" : "osc-label-inactive";
        let fxParamsVisibility = this.state.isOn ? "osc-params-visible" : "osc-params-invisible";

        return (
            <div className={fxContainerClass}>
                <p className={fxLabelClass}>REVERB</p>
                <label>
                    <Switch
                        onChange={this.mute}
                        checked={this.state.isOn}
                        offColor="#D3CCDA"
                        onColor="#917FA2"
                        onHandleColor="#240046"
                        handleDiameter={20}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
                        height={14}
                        width={34}
                        className="osc-switch"
                    />
                </label>
                <div className={fxParamsVisibility}>
                    <div className="fx-knobs">
                        <div className="verb-decay-knob" onMouseDown={this.preventDrag}>
                            <CircularSlider
                                width={42}
                                onChange={this.adjust1}
                                min={0}
                                max={8000}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                                dataIndex={this.state.decay}
                            />
                            <p className="knob-label">DECAY</p>
                        </div>
                        <div className="verb-delay-knob" onMouseDown={this.preventDrag}>
                            <CircularSlider
                                width={42}
                                onChange={this.adjust2}
                                min={0}
                                max={500}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                                dataIndex={this.state.preDelay}
                            />
                            <p className="knob-label">DELAY</p>
                        </div>
                        <div className="verb-amt-knob" onMouseDown={this.preventDrag}>
                            <CircularSlider
                                width={42}
                                onChange={this.adjust3}
                                min={0}
                                max={100}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                                dataIndex={this.state.wet}
                            />
                            <p className="knob-label">AMOUNT</p>
                        </div>
                    </div>
                    {/* <input name="decay" type='range' min='1' max='3000' step='1' value={this.state.displayCents} onChange={this.adjust}></input> */}
                    {/* <input name="predelay" type='range' min='0' max='1000' step='1' value={this.state.level} onChange={this.adjust}></input> */}
                    {/* <input name="wet" type='range' min='0' max='100' step='1' value={this.state.level} onChange={this.adjust}></input>
                    <button name="mute" onClick={this.mute}>{this.onOrOff()}</button> */}
                </div>
            </div>
        );
    }

}
