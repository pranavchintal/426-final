/* eslint-disable default-case */
import React from 'react';

export class Verb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            decay: 0,
            preDelay: 0,
            wet: 0
        };

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "decay":
                //console.log(event.target.value);
                this.props.verb.set({decay: event.target.value / 1000});
                this.setState({decay: event.target.value});
                break;
            case "predelay":
                this.props.verb.set({preDelay: event.target.value / 1000});
                this.setState({preDelay: event.target.value});
                break;
            case "wet":
                this.props.verb.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});
                break;
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <p>DECAY</p>
                <input name="decay" type='range' min='1' max='3000' step='1' value={this.state.displayCents} onChange={this.adjust}></input>
                <p>PREDELAY</p>
                <input name="predelay" type='range' min='0' max='1000' step='1' value={this.state.level} onChange={this.adjust}></input>
                <p>WET/DRY</p>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.level} onChange={this.adjust}></input>
            </div>
        </div>);
    }

}
