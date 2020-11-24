/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TripleOsc } from "../synth_components/TripleOsc.js";
import { PatchBrowser } from './PatchBrowser.js';
import fire from '../fire';

import './stylesheets/SynthBuilder.css';

export class SynthBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            show: false,
            showLogout: this.props.isSignedIn,
            patchName: "",
            patchDescription: ""
        };

        this.handleLogout = this.props.handleLogout;
        this.user = this.props.user;

        fire.auth().onAuthStateChanged(() => {
            if (this.props.isSignedIn) {
                this.state.showLogout = false;
            } else {
                this.state.showLogout = true;
            }
        });
    }

    showBrowser = () => {
      this.setState({ show: true });
    };
  
    hideBrowser = () => {
      this.setState({ show: false });
    };
    
    

    render() {
        const setname=(temp)=>{
            this.setState({ patchName: temp });
        }
        const setdescription=(temp)=>{
            this.setState({ patchDescription: temp });
        }

        return (
            <div id="creator-container">
                <h1 className="creator-title">
                    CREATOR
                    </h1>
                <div className="text-controls">
                    <a href="#creator-container" className="synth-name">
                        <span style={{ color: '#C77DFF' }}>UNTITLED PATCH </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                            <g id="edit" transform="translate(-4 -3.64)">
                                <path id="Path_120" data-name="Path 120" d="M12.7,5.716l1.392-1.4a2.275,2.275,0,0,1,1.618-.675h.006a2.279,2.279,0,0,1,1.619,3.889l-1.407,1.4Zm-.906.912L4.124,14.344a.426.426,0,0,0-.124.3v2.567a.428.428,0,0,0,.429.428H7.006a.43.43,0,0,0,.3-.125l7.7-7.676Z" transform="translate(0 0)" fill="#fff" />
                            </g>
                        </svg>
                    </a>
                    <a href="#creator-container">
                        LOAD PATCH
                    </a>
                    <a onClick={this.showBrowser}>
                        BROWSE PATCHES
                    </a>
                    {/* <a href="#creator-container">
                        SAVE
                        <svg id="ic_expand_more" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ marginLeft: '3px' }}>
                            <rect id="rectangle" width="24" height="24" fill="none" />
                            <path id="path" d="M16.6,8.6,12,13.2,7.4,8.6,6,10l6,6,6-6Z" fill="#fff" fillRule="evenodd" />
                        </svg>
                    </a> */}
                        <div class="dropdown">
                            <button class="dropbtn">Dropdown</button>
                            <svg id="ic_expand_more" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" style={{ marginLeft: '3px' }}>
                            <rect id="rectangle" width="24" height="24" fill="none" />
                            <path id="path" d="M16.6,8.6,12,13.2,7.4,8.6,6,10l6,6,6-6Z" fill="#fff" fillRule="evenodd" />
                        </svg>
                            <div class="dropdown-content">
                            <input type="text" placeholder="name of patch" 
                             onChange={(e) => setname(e.target.value)}/>
                            <input type ="text" placeholder="describe the patch" 
                                onChange={(e) => setdescription(e.target.value)}/>                           
                            </div>
                        </div>
                    <a href="#creator-container" className={this.state.showLogout ? "display-initial" : "display-none"} onClick={this.handleLogout}>
                        LOGOUT
                    </a>
                </div>
                <PatchBrowser handleClose={this.hideBrowser} show={this.state.show} patchName={this.state.patchName} patchDescription= {this.state.patchDescription} user={this.user} />
                <TripleOsc />
            </div>
        )
    }
}