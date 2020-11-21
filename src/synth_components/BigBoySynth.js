import * as Tone from 'tone';

export class BigBoySynth {

    constructor(synthOptions) {

        this.filter = new Tone.Filter(10000, "lowpass");
        this.chorus = new Tone.Chorus(synthOptions.chorus);
        this.verb = new Tone.Reverb(synthOptions.reverb);
        this.delay = new Tone.FeedbackDelay(synthOptions.delay);
        this.dist = new Tone.Distortion(synthOptions.distortion);
        this.chain = [null, null, null, null, null];
        this.chainOrder = [this.filter, this.chorus, this.verb, this.delay, this.dist]

        this.voice1 = new Tone.PolySynth(Tone.MonoSynth, synthOptions.voice1).chain(...this.noNull(this.chain), Tone.Destination);
        this.voice2 = new Tone.PolySynth(Tone.MonoSynth, synthOptions.voice2).chain(...this.noNull(this.chain), Tone.Destination);
        this.voice3 = new Tone.PolySynth(Tone.MonoSynth, synthOptions.voice3).chain(...this.noNull(this.chain), Tone.Destination);

        this.toggleChain = this.toggleChain.bind(this);
    }

    noNull(arr) {
        return arr.filter(elm => elm !== null);
    }

    playNote(event) {
        if(!event.repeat && BigBoySynth.keyNoteMap[event.keyCode] !== undefined) {
            this.voice1.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
            this.voice2.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
            this.voice3.triggerAttack(BigBoySynth.keyNoteMap[event.keyCode]);
        }
    }

    releaseNote(event) {
        this.voice1.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]);
        this.voice2.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]);
        this.voice3.triggerRelease(BigBoySynth.keyNoteMap[event.keyCode]);
    }

    toggleChain(effect) {
        if(this.chain.includes(effect)) {
            //this.chain = this.chain.filter(elm => elm !== effect);
            delete this.chain[this.chainOrder.indexOf(effect)];
            effect.disconnect();
        } else {
            this.chain.splice(this.chainOrder.indexOf(effect), 1, effect);
        }
              
        console.log(this.chain);
        
        this.voice1.chain(...this.noNull(this.chain), Tone.Destination);
        this.voice2.chain(...this.noNull(this.chain), Tone.Destination);
        this.voice3.chain(...this.noNull(this.chain), Tone.Destination);

        //console.log(this.chain);

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