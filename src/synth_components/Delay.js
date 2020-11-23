/* eslint-disable default-case */
import React from 'react';
import Switch from "react-switch";
import CircularSlider from '@fseehawer/react-circular-slider';

export class Delay extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            delayTime: this.props.synth.delay.delayTime.value * 1000,
            feedback: this.props.synth.delay.feedback.value * 100,
            wet: this.props.synth.delay.wet.value * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.delay)
        };

        this.adjust1 = this.adjust1.bind(this);
        this.adjust2 = this.adjust2.bind(this);
        this.adjust3 = this.adjust3.bind(this);
        this.mute = this.mute.bind(this);
    }

    mute() {
        this.props.synth.toggleChain(this.props.synth.delay);
        this.setState({ isOn: !this.state.isOn });
    }

    onOrOff() {
        if (this.state.isOn) {
            return "Off";
        } else {
            return "On";
        }
    }

    adjust1(value) {
        this.props.synth.delay.set({ delayTime: value / 1000 });
    }
    
    adjust2(value) {
        this.props.synth.delay.set({ feedback: value / 100 });

    }

    adjust3(value) {
        this.props.synth.delay.set({ wet: value / 100 });
    }

    // adjust(event) {
    //     switch (event.target.name) {
    //         case "delayTime":
    //             this.props.synth.delay.set({ delayTime: event.target.value / 1000 });
    //             this.setState({ delayTime: event.target.value });
    //             break;
    //         case "feedback":
    //             this.props.synth.delay.set({ feedback: event.target.value / 100 });
    //             this.setState({ feedback: event.target.value });
    //             break;
    //         case "wet":
    //             this.props.synth.delay.set({ wet: event.target.value / 100 });
    //             this.setState({ wet: event.target.value });
    //     }
    // }

    render() {

        let fxContainerClass = this.state.isOn ? "fx-container-active" : "fx-container-inactive";
        let fxLabelClass = this.state.isOn ? "osc-label-active" : "osc-label-inactive";
        let fxParamsVisibility = this.state.isOn ? "osc-params-visible" : "osc-params-invisible";

        return (
            <div className={fxContainerClass}>
                <p className={fxLabelClass}>DELAY</p>
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
                                max={1000}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                                dataIndex={this.state.delayTime}
                            />
                            <p className="knob-label">TIME</p>
                        </div>
                        <div className="verb-delay-knob" onMouseDown={this.preventDrag}>
                            <CircularSlider
                                width={42}
                                onChange={this.adjust2}
                                min={0}
                                max={100}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                                dataIndex={this.state.feedback}
                            />
                            <p className="knob-label">FDBK</p>
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
                </div>
                {/* <div className={fxParamsVisibility}>
                    <p>TIME</p>
                    <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                    <p>FEEDBACK</p>
                    <input name="feedback" type='range' min='0' max='100' step='1' value={this.state.feedback} onChange={this.adjust}></input>
                    <p>WET/DRY</p>
                    <input name="wet" type='range' min='0' max='100' step='1' value={this.state.level} onChange={this.adjust}></input>
                    <button name="mute" onClick={this.mute}>{this.onOrOff()}</button>
                </div> */}
            </div>);
    }

}
