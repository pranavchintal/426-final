/* eslint-disable default-case */
import React from 'react';
export class Delay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            delayTime: 0,
            feedback: 0,
            maxDelay: 0,
            wet: 0
        };

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {
        switch(event.target.name) {
            case "delayTime":
                this.props.delay.set({delayTime: event.target.value / 1000});
                this.setState({delayTime: event.target.value});
                break;
            case "feedback":
                this.props.delay.set({feedback: event.target.value / 100});
                this.setState({feedback: event.target.value});
                break;
            case "maxDelay":
                this.props.delay.set({maxDelay: event.target.value / 1000});
                this.setState({maxDelay: event.target.value});
                break;
            case "wet":
                this.props.delay.set({wet: event.target.value / 100});
                this.setState({wet: event.target.value});                
        }
    }

    render() {


        return (<div className='container'>
            <div>
                <p>TIME</p>
                <input name="delayTime" type='range' min='0' max='1000' step='1' value={this.state.delayTime} onChange={this.adjust}></input>
                <p>FEEDBACK</p>
                <input name="feedback" type='range' min='0' max='100' step='1' value={this.state.feedback} onChange={this.adjust}></input>
                <p>MAX DELAY</p>
                <input name="maxDelay" type='range' min='0' max='3000' step='1' value={this.state.maxDelay} onChange={this.adjust}></input>              
                <p>WET/DRY</p>
                <input name="wet" type='range' min='0' max='100' step='1' value={this.state.level} onChange={this.adjust}></input>
            </div>
        </div>);
    }

}
