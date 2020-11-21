/* eslint-disable default-case */
import React from 'react';


export class Chorus extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frequency: 0, 
            delayTime: 0,
            depth: 0,
        };

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "frequency":
                this.props.chorus.set({frequency: event.target.value});
                this.setState({frequency: event.target.value});
                break;
            case "delayTime":
                this.props.chorus.set({delayTime: event.target.value / 1000});
                this.setState({delayTime: event.target.value});
                break;
            case "depth":
                this.props.chorus.set({depth: event.target.value / 100});
                this.setState({depth: event.target.value});
                break;
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <p>RATE</p>
                <input name="frequency" type='range' min='0' max='20000' step='1' value={this.state.frequency} onChange={this.adjust}></input>
                <p>DELAY</p>
                <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                <p>DEPTH</p>
                <input name="depth" type='range' min='0' max='100' step='1' value={this.state.depth} onChange={this.adjust}></input>
            </div>
        </div>);
    }

}
