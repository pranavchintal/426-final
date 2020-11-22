/* eslint-disable default-case */
import React from 'react';
import Switch from "react-switch";
import CircularSlider from '@fseehawer/react-circular-slider';

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
        switch (event.target.name) {
            case "distortion":
                this.props.synth.dist.set({ distortion: event.target.value / 100 });
                this.setState({ distortion: event.target.value });
                break;
            case "wet":
                this.props.synth.dist.set({ wet: event.target.value / 100 });
                this.setState({ wet: event.target.value });
                break;
        }
    }

    render() {

        let fxContainerClass = !this.state.isOn ? "fx-container-active" : "fx-container-inactive";
        let fxLabelClass = !this.state.isOn ? "osc-label-active" : "osc-label-inactive";
        let fxParamsVisibility = !this.state.isOn ? "osc-params-visible" : "osc-params-invisible";

        return (
            <div className={fxContainerClass}>
                <p className={fxLabelClass}>DIST</p>
                <label>
                    <Switch
                        onChange={this.mute}
                        checked={!this.state.isOn}
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
                        <div className="dist-gain-knob" onMouseDown={this.preventDrag}>
                            <CircularSlider
                                width={42}
                                onChange={value => { console.log(value); }}
                                min={-12}
                                max={12}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                            />
                            <p className="knob-label">GAIN</p>
                        </div>
                        <div className="dist-amt-knob" onMouseDown={this.preventDrag}>
                            <CircularSlider
                                width={42}
                                onChange={value => { console.log(value); }}
                                min={-12}
                                max={12}
                                knobPosition="left"
                                hideKnob={true}
                                trackColor="#917FA2"
                                progressColorFrom="#240046"
                                progressColorTo="#240046"
                                hideLabelValue={true}
                            />
                            <p className="knob-label">AMOUNT</p>
                        </div>
                    </div>
                    {/* <p>AMOUNT</p>
                        <input name="distortion" type='range' min='0' max='100' step='1' value={this.state.distortion} onChange={this.adjust}></input>
                        <p>WET/DRY</p>
                        <input name="wet" type='range' min='0' max='100' step='1' value={this.state.wet} onChange={this.adjust}></input>
                        <button name="mute" onClick={this.mute}>{this.onOrOff()}</button> */}
                </div>
            </div>
        );
    }

}
