/* eslint-disable default-case */
import React from 'react';
import Switch from "react-switch";
import CircularSlider from '@fseehawer/react-circular-slider';

export class Chorus extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frequency: this.props.synth.chorus.freqency,
            delayTime: this.props.synth.chorus.delayTime,
            depth: this.props.synth.chorus.depth * 100,
            isOn: this.props.synth.chain.includes(this.props.synth.chorus)
        };

        this.adjust = this.adjust.bind(this);
        this.mute = this.mute.bind(this);
    }

    mute() {
        this.props.synth.toggleChain(this.props.synth.chorus);
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
            case "frequency":
                this.props.synth.chorus.set({ frequency: event.target.value });
                this.setState({ frequency: event.target.value });
                break;
            case "delayTime":
                this.props.synth.chorus.set({ delayTime: event.target.value / 1000 });
                this.setState({ delayTime: event.target.value });
                break;
            case "depth":
                this.props.synth.chorus.set({ depth: event.target.value / 100 });
                this.setState({ depth: event.target.value });
                break;
        }
    }

    render() {

        let fxContainerClass = !this.state.isOn ? "fx-container-active" : "fx-container-inactive";
        let fxLabelClass = !this.state.isOn ? "osc-label-active" : "osc-label-inactive";
        let fxParamsVisibility = !this.state.isOn ? "osc-params-visible" : "osc-params-invisible";

        return (
            <div className={fxContainerClass}>
                <p className={fxLabelClass}>CHORUS</p>
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
                        <div className="verb-decay-knob" onMouseDown={this.preventDrag}>
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
                            <p className="knob-label">RATE</p>
                        </div>
                        <div className="verb-delay-knob" onMouseDown={this.preventDrag}>
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
                            <p className="knob-label">DELAY</p>
                        </div>
                        <div className="verb-amt-knob" onMouseDown={this.preventDrag}>
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
                            <p className="knob-label">DEPTH</p>
                        </div>
                    </div>
                    {/* <p>RATE</p>
                    <input name="frequency" type='range' min='0' max='20000' step='1' value={this.state.frequency} onChange={this.adjust}></input>
                    <p>DELAY</p>
                    <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                    <p>DEPTH</p>
                    <input name="depth" type='range' min='0' max='100' step='1' value={this.state.depth} onChange={this.adjust}></input>
                    <button name="mute" onClick={this.mute}>{this.onOrOff()}</button> */}
                </div>
            </div>
        )
    }

}
