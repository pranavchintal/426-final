import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

export class Port extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portTime: this.props.synth[0].get().portamento
        };
        this.adjust = this.adjust.bind(this);
    }

    adjust(value) {
        this.props.synth.forEach(elm => {
            elm.set({ portamento: value / 1000 });
        });
    }

    render() {

        return (
            <div className={"fx-container-active"}>
                <p className="osc-label-active">GLIDE</p>
                <div className="glide-knob" onMouseDown={this.preventDrag}>

                        <CircularSlider
                            width={42}
                            onChange={this.adjust}
                            min={0}
                            max={1000}
                            knobPosition="left"
                            hideKnob={true}
                            trackColor="#917FA2"
                            progressColorFrom="#240046"
                            progressColorTo="#240046"
                            hideLabelValue={true}
                            dataIndex={this.state.portTime}
                        />
                        <p className="knob-label">AMOUNT</p>
                    </div>
                {/* <input name="port" type='range' min='0' max='3000' step='1' value={this.state.portTime} onChange={this.adjust}></input> */}
            </div>);
    }

}
