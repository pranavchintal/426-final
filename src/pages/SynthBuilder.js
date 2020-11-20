import React from 'react';
import {TripleOsc} from "../synth_components/TripleOsc.js"

import './stylesheets/SynthBuilder.css';

export class SynthBuilder extends React.Component {
    render() {
        return (
            <div id="creator-container">
                <h1 className="creator-title">
                    CREATOR
                    </h1>
                <div className="text-controls">
                    <a href="#creator-container">
                        LOAD PATCH
                        </a>
                    <a href="#creator-container">
                        SAVE
                        <svg id="ic_expand_more" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ marginLeft: '3px' }}>
                            <rect id="rectangle" width="24" height="24" fill="none" />
                            <path id="path" d="M16.6,8.6,12,13.2,7.4,8.6,6,10l6,6,6-6Z" fill="#fff" fill-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#creator-container">
                        SYNTH: <span style={{ color: '#C77DFF' }}>SYNTH 1</span>
                        <svg id="ic_expand_more" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <rect id="rectangle" width="24" height="24" fill="none" />
                            <path id="path" d="M16.6,8.6,12,13.2,7.4,8.6,6,10l6,6,6-6Z" fill="#fff" fill-rule="evenodd" />
                        </svg>
                    </a>
                    <a href="#creator-container">
                        OTHER OPTIONS
                        <svg id="ic_expand_more" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <rect id="rectangle" width="24" height="24" fill="none" />
                            <path id="path" d="M16.6,8.6,12,13.2,7.4,8.6,6,10l6,6,6-6Z" fill="#fff" fill-rule="evenodd" />
                        </svg>
                    </a>
                </div>
                <div className="break"></div>
                <TripleOsc />
            </div>
        )
    }
}