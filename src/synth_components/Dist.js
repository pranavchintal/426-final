/* eslint-disable default-case */
import React from 'react';

export class Dist extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            distortion: 0,
            oversample: 0,
            wet: 0
        };

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "distortion":
                //console.log(event.target.value);
                this.props.dist.set({distortion: event.target.value / 100});
                this.setState({distortion: event.target.value});
                break;
            case "oversample":
                this.props.dist.set({oversample: event.taget.value});
                this.setState({oversample: event.target.value});
                break;
            case "wet":
                this.props.dist.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});
                break;
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <p>AMOUNT</p>
                <input name="distortion" type='range' min='0' max='100' step='1' value={this.state.distortion} onChange={this.adjust}></input>
                <p>WET/DRY</p>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.wet} onChange={this.adjust}></input>
            </div>
        </div>);
    }

}
