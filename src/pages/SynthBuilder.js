/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { TripleOsc } from "../synth_components/TripleOsc.js";
import { PatchBrowser } from './PatchBrowser.js';
import fire from '../fire';
import './stylesheets/SynthBuilder.css';
import { BigBoySynth } from "../synth_components/BigBoySynth.js";
import { BigBoyOptions } from "../synth_components/BigBoyOptions.js";
//import fire from '../fire';



export class SynthBuilder extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            show: false,

            showLogout: this.props.isSignedIn,
            synth : new BigBoySynth(new BigBoyOptions({}))
   
        };

        this.synth = new BigBoySynth(new BigBoyOptions({}));

        this.handleLogout = this.props.handleLogout;

        fire.auth().onAuthStateChanged(() => {
            if (this.props.isSignedIn) {
                this.state.showLogout = false;
            } else {
                this.state.showLogout = true;
            }
        });

        this.savePatch = this.savePatch.bind(this);
        this.loadPatch = this.loadPatch.bind(this);
    }

    async loadPatch() {

        console.log("loading patch");
        let docRef = fire.firestore().collection("users").doc("1Oa0XSgPyQN1EKxlTfJdrsN2VMB3");

        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data().testName);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        let otherRef = await docRef.get();

        let final = JSON.parse(otherRef.data().testName);

        //this.state.synth = new BigBoySynth(final);
        this.setState({synth: new BigBoySynth(final)});

        console.log(this.state.synth);
    }

    savePatch() {

        const replacerFunc = () => {
            const visited = new WeakSet();
            return (key, value) => {
                if (typeof value === "object" && value !== null) {
                    if (visited.has(value)) {
                        return;
                    }
                    visited.add(value);
                }
                return value;
            };
        };


        let newOpt = new BigBoyOptions(this.state.synth);

        let jsonOpt = JSON.stringify(newOpt, replacerFunc());

        console.log(jsonOpt);

        var db = fire.firestore();

        console.log("save synth");

        // Create an initial document to update.
        var dataBaseEntry = db.collection("users").doc("1Oa0XSgPyQN1EKxlTfJdrsN2VMB3");
        dataBaseEntry.set({
            testName: jsonOpt
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
            <>
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
                    {/* <a href="#creator-container" onClick={this.loadPatch}>
                        LOAD
                    </a> */}
                    <a onClick={this.showBrowser}>
                        BROWSE PATCHES
                    </a>

                    {/* <a href="#creator-container" onClick={this.savePatch}>
                        SAVE
                    </a> */}
                    <a href="#creator-container" className={this.state.showLogout ? "display-initial" : "display-none"} onClick={this.handleLogout}>
                        LOGOUT
                    </a>
                </div>

                <div className="instructions">
                    <p>Click on any control to start the synth engine. Use your keyboard to play notes! If a note won't stop ringing, press the <span className="panic-text">panic button</span> at the bottom of the page.</p>
                </div>

                <PatchBrowser handleClose={this.hideBrowser} show={this.state.show} patchName={this.state.patchName} patchDescription= {this.state.patchDescription} user={this.props.user}/>
                <TripleOsc synth={this.state.synth}/>
            </div>
            <div className="footer">
                    <p>
                        Soundbites was developed by Pranav Chintalapudi, Will Ritchie and Sahith Desham.
                    </p>
                    <div className="footer-break"></div>
                    <a href="https://github.com/pranavchintal/soundbites" className="repo-link">
                        Repository
                    </a>
            </div>
            </>
        )
    }
}