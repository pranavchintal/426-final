import React from 'react';

export class Port extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            portTime: 0
        };

        this.adjust = this.adjust.bind(this);
    }


    adjust(event) {

        this.props.synth.forEach(elm => {
            elm.set({portamento: event.target.value / 1000});
        });
        this.setState({portTime: event.target.value});
    }

    render() {


        return (<div className='container'>
            <div>
                <p>GLIDE</p>
                <input name="port" type='range' min='0' max='3000' step='1' value={this.state.portTime} onChange={this.adjust}></input>
            </div>
        </div>);
    }

}
