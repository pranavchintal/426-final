import * as Tone from 'tone';

export class BigBoySynth {

    constructor(synthOptions) {

        this.chorus = new Tone.Chorus(synthOptions.chorus);
        this.verb = new Tone.Reverb(synthOptions.reverb);
        this.delay = new Tone.FeedbackDelay(synthOptions.delay);
        this.dist = new Tone.Distortion(synthOptions.distortion);
        this.chain = synthOptions.chain;
        //this.chainOrder = [this.dist, this.delay, this.chorus, this.verb];
        this.chainOrder = ["Distortion", "FeedbackDelay", "Chorus", "Reverb"];
        this.isMute = synthOptions.isMute;
        this.pitch = synthOptions.pitch;
        this.detuneVal = synthOptions.detuneVal;

        this.voice1 = new Tone.PolySynth(Tone.MonoSynth, synthOptions.voice1).chain(...this.formatChain(), Tone.Destination);
        this.voice2 = new Tone.PolySynth(Tone.MonoSynth, synthOptions.voice2).chain(...this.formatChain(), Tone.Destination);
        this.voice3 = new Tone.PolySynth(Tone.MonoSynth, synthOptions.voice3).chain(...this.formatChain(), Tone.Destination);

        this.voices = [this.voice1, this.voice2, this.voice3];

        this.voices.forEach(elm => {
            elm.maxPolyphony = 32;
        })

        
        this.formatChain = this.formatChain.bind(this);
        this.formatChainForJson = this.formatChainForJson.bind(this);
        this.toggleChain = this.toggleChain.bind(this);
        this.panic = this.panic.bind(this);
    }

    formatChainForJson() {

        let result = [];

        for(let i = 0; i < this.chain.length; i++) {
            switch(this.chain[i]) {
                case "Distortion":
                    result[i] = this.dist;
                    break;
                case "FeedbackDelay":
                    result[i] = this.delay;
                    break;
                case "Chorus":
                    result[i] = this.chorus;
                    break;
                case "Reverb":
                    result[i] = this.verb;
                    break;
            }
        }

        //console.log(result);
        //console.log(result.length)

        return result;
    }

    formatChain() {

        let result = [];

        for(let i = 0; i < this.chain.length; i++) {
            switch(this.chain[i]) {
                case "Distortion":
                    result[i] = this.dist;
                    break;
                case "FeedbackDelay":
                    result[i] = this.delay;
                    break;
                case "Chorus":
                    result[i] = this.chorus;
                    break;
                case "Reverb":
                    result[i] = this.verb;
                    break;
            }
        }

        //console.log(result);
        //console.log(result.length)

        return result.filter(elm => elm !== null);
    }

    playNote(event) {
        if(!event.repeat && BigBoySynth.keyNoteMap[event.keyCode] !== undefined) {

            for(let i = 0; i < this.voices.length; i++) {
                if(!this.isMute[i]) {
                    this.voices[i].triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
                }
            }

            //this.voices.forEach(elm => elm.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]));

            //this.voice1.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
            //this.voice2.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
            // this.voice3.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
        }
    }

    releaseNote(event) {

        let elapsedSinceLastReleased = Date.now() - this.lastReleased;

        if(elapsedSinceLastReleased < 200) {
            this.voices.forEach(elm => elm.releaseAll());
        } else {
            this.voices.forEach(elm => elm.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]));
        }

        this.lastReleased = Date.now();

        //this.voice1.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]);
        //this.voice2.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]);
        //this.voice3.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]);
    }

    toggleMute(num) {
        this.isMute[num - 1] = !this.isMute[num - 1];
        console.log(this.isMute);
    }

    panic() {
        this.voices.forEach(elm => {
            elm.releaseAll();
        })
    }

    toggleChain(effect) {
        if(this.chain.includes(effect.name)) {
            delete this.chain[this.chainOrder.indexOf(effect.name)];
            effect.disconnect();
        } else {
            this.chain.splice(this.chainOrder.indexOf(effect.name), 1, effect.name);
        }
              
        console.log(this.chain);

        this.voices.forEach(elm => elm.chain(...this.formatChain(), Tone.Destination));

    }

}

BigBoySynth.keyNoteMap = {
    90: "C4",
    88: "D4",
    67: "E4",
    86: "F4",
    66: "G4",
    78: "A4",
    77: "B4",
    188: "C5",
    190: "D5",
    191: "E5",
    76: "C#5",
    186: "D#5",
    83: "C#4",
    68: "D#4",
    71: "F#4",
    72: "G#4",
    74: "A#4",
    81: "C5",
    87: "D5",
    69: "E5",
    82: "F5",
    84: "G5",
    89: "A5",
    85: "B5",
    73: "C6",
    50: "C#5",
    51: "D#5",
    53: "F#5",
    54: "G#5",
    55: "A#5",
    79: "D6",
    80: "E6",
    219: "F6",
    221: "G6",
    57: "C#6",
    48: "D#6",
    187: "F#6"
}

