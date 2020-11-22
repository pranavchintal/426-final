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

    adjust(event) {
        this.props.synth.forEach(elm => {
            elm.set({ portamento: event.target.value / 1000 });
        });
        this.setState({ portTime: event.target.value });
    }

    render() {

        return (
            <div className={"fx-container-active"}>
                <p className="osc-label-active">GLIDE</p>
                <div className="glide-knob" onMouseDown={this.preventDrag}>
                        {/* <Knob
                            size={42}
                            angleOffset={220}
                            angleRange={280}
                            min={-100}
                            max={100}
                            className="styledKnob"
                            onChange={value => console.log(value)}
                        >
                            <circle r="21" cx="21" cy="21" />
                            <Pointer
                                width={2}
                                height={21}
                                radius={0}
                                type="rect"
                                color="#fff"
                            />
                        </Knob> */}
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
                {/* <input name="port" type='range' min='0' max='3000' step='1' value={this.state.portTime} onChange={this.adjust}></input> */}
            </div>);
    }

}
