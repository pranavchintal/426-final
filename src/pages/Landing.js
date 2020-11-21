import React from 'react';
import './stylesheets/Landing.css';
import { ReactComponent as SynthIcons } from './icons/synth_icons.svg';
import { ReactComponent as CreateSoundBiteButton } from './icons/create-button.svg';
import { ReactComponent as SignupButton } from './icons/signup-button.svg';
import { ReactComponent as Arrow } from './icons/arrow.svg';

export class Landing extends React.Component {

    render() {
        return (
            <div>
                <div className="landing-header-all">
                    <div className="landing-header-left" >
                        <div className="lh-left-elts">
                            <h1 className="title-text">SOUNDBITES</h1>
                            <p className="flavor-text">
                                A simple synth playground
                                made for you <br />to explore your musical side.
                            </p>
                            <div className="landing-buttons">
                                <a href="#creator-container" className="create-soundbite-button">
                                    CREATE A SOUNDBITE
                                </a>
                                <a href="#creator-container" className="signup-button">
                                    LOG IN
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="landing-header-right">
                        <div className="synth-icons">
                            <SynthIcons />
                        </div>
                    </div>
                </div>
                <div className="landing-bottom">
                    <div className="svg-arrow">
                        <div className="svg-bounce">
                            {/* <svg height="37" viewBox="0 0 24 37" width="24" xmlns="http://www.w3.org/2000/svg">
                                <g fill="none" fill-rule="evenodd" stroke="#5A189A" stroke-linecap="square" stroke-width="2.8" transform="translate(2 1)">
                                    <path d="m2.82418338 30.8044364 13.57954542-.0568182.0568182-13.5795454" transform="matrix(.70710678 .70710678 -.70710678 .70710678 19.785027 .20723)"></path>
                                    <path d="m9.54545455.45075758v30.65151512"></path>
                                </g>
                            </svg> */}
                            <div className="arrow">
                                <div className="clickarea">
                                    <a href="#creator-container">
                                    <Arrow />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text-container">
                        <a href="#creator-container" className="bottom-text">
                            START CREATING
                        </a>
                    </div>
                </div >
            </div >
        )
    }
}