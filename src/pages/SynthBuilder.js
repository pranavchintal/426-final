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
            showLogout: this.props.isSignedIn
            

        };



        this.synth = new BigBoySynth(JSON.parse('{"chorus":{"wet":0.5,"feedback":0,"frequency":1,"delayTime":0.005,"depth":0.7,"type":"sine","spread":180},"reverb":{"wet":1,"decay":1.5,"preDelay":0.01},"delay":{"wet":1,"feedback":0.13,"delayTime":0.25,"maxDelay":1},"distortion":{"wet":1,"distortion":0.4,"oversample":"none"},"chain":[],"voice1":{"volume":-16.999999999999996,"detune":-436,"portamento":0,"envelope":{"attack":0.005,"attackCurve":"linear","decay":0.1,"decayCurve":"exponential","release":1,"releaseCurve":"exponential","sustain":0.9},"filter":{"Q":2,"detune":0,"frequency":0,"gain":0,"rolloff":-48,"type":"lowpass"},"filterEnvelope":{"attack":0.6,"attackCurve":"linear","decay":0.2,"decayCurve":"exponential","release":2,"releaseCurve":"exponential","sustain":0.5,"baseFrequency":350,"exponent":2,"octaves":3},"oscillator":{"detune":-436,"frequency":440,"partialCount":32,"partials":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"phase":0,"type":"sine32"}},"voice2":{"volume":-17.999999999999996,"detune":500,"portamento":0,"envelope":{"attack":0.005,"attackCurve":"linear","decay":0.1,"decayCurve":"exponential","release":1,"releaseCurve":"exponential","sustain":0.9},"filter":{"Q":2,"detune":0,"frequency":0,"gain":0,"rolloff":-48,"type":"lowpass"},"filterEnvelope":{"attack":0.6,"attackCurve":"linear","decay":0.2,"decayCurve":"exponential","release":2,"releaseCurve":"exponential","sustain":0.5,"baseFrequency":350,"exponent":2,"octaves":3},"oscillator":{"detune":500,"frequency":440,"partialCount":32,"partials":[0.6366197723675814,-0.3183098861837907,0.2122065907891938,-0.15915494309189535,0.12732395447351627,-0.1061032953945969,0.09094568176679733,-0.07957747154594767,0.0707355302630646,-0.06366197723675814,0.057874524760689224,-0.05305164769729845,0.048970751720583176,-0.04547284088339867,0.04244131815783876,-0.039788735772973836,0.03744822190397537,-0.0353677651315323,0.033506303808820075,-0.03183098861837907,0.03031522725559911,-0.028937262380344612,0.027679120537720932,-0.026525823848649224,0.025464790894703253,-0.024485375860291588,0.0235785100876882,-0.022736420441699334,0.021952405943709702,-0.02122065907891938,0.02053612168927682,-0.019894367886486918],"phase":0,"type":"sawtooth32"}},"voice3":{"volume":-10,"detune":0,"portamento":0,"envelope":{"attack":0.005,"attackCurve":"linear","decay":0.1,"decayCurve":"exponential","release":1,"releaseCurve":"exponential","sustain":0.9},"filter":{"Q":2,"detune":0,"frequency":0,"gain":0,"rolloff":-48,"type":"lowpass"},"filterEnvelope":{"attack":0.6,"attackCurve":"linear","decay":0.2,"decayCurve":"exponential","release":2,"releaseCurve":"exponential","sustain":0.5,"baseFrequency":350,"exponent":2,"octaves":3},"oscillator":{"detune":0,"frequency":440,"partialCount":32,"partials":[0.6366197723675814,-0.3183098861837907,0.2122065907891938,-0.15915494309189535,0.12732395447351627,-0.1061032953945969,0.09094568176679733,-0.07957747154594767,0.0707355302630646,-0.06366197723675814,0.057874524760689224,-0.05305164769729845,0.048970751720583176,-0.04547284088339867,0.04244131815783876,-0.039788735772973836,0.03744822190397537,-0.0353677651315323,0.033506303808820075,-0.03183098861837907,0.03031522725559911,-0.028937262380344612,0.027679120537720932,-0.026525823848649224,0.025464790894703253,-0.024485375860291588,0.0235785100876882,-0.022736420441699334,0.021952405943709702,-0.02122065907891938,0.02053612168927682,-0.019894367886486918],"phase":0,"type":"sawtooth32"}},"isMute":[false,false,true],"pitch":[-4,5,0],"detuneVal":[-36,0,0]}'));
        // this.synth.voice1.set({oscillator: {
        //     type: "square32"
        // }});
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

        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data().testName);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        let otherRef = await docRef.get();

        let final = JSON.parse(otherRef.data().testName);

        this.synth = new BigBoySynth(final);

        console.log(this.synth);
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


        let newOpt = new BigBoyOptions(this.synth);

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
                        <a onClick={this.loadPatch}>
                            LOAD PATCH
                        </a>
                    </a>
                    <a onClick={this.showBrowser}>
                        BROWSE PATCHES
                    </a>
                    <a href="#creator-container">
                        <a onClick={this.savePatch}>
                        SAVE
                    </a>
                    </a>
                    <a href="#creator-container" className={this.state.showLogout ? "display-initial" : "display-none"} onClick={this.handleLogout}>
                        LOGOUT
                    </a>
                </div>
                <PatchBrowser handleClose={this.hideBrowser} show={this.state.show} />
                <TripleOsc synth={this.synth}/>
            </div>
        )
    }
}