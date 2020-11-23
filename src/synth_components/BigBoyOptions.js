import * as Tone from 'tone';

export class BigBoyOptions {

    constructor(synth) {
        this.chorus = synth.chorus === undefined ? Tone.Chorus.getDefaults() : synth.chorus.get();
        this.reverb = synth.verb === undefined ? Tone.Reverb.getDefaults() : synth.verb.get();
        this.delay = synth.delay === undefined ? Tone.FeedbackDelay.getDefaults() : synth.delay.get();
        this.distortion = synth.dist === undefined ? Tone.Distortion.getDefaults() : synth.dist.get();
        this.chain = synth.chain === undefined ? [this.filter, this.chorus, this.verb, this.delay, this.dist, Tone.Destination] : synth.chain;
        this.voice1 = synth.voice1 === undefined ? Tone.MonoSynth.getDefaults() : synth.voice1.get();
        this.voice2 = synth.voice2 === undefined ? Tone.MonoSynth.getDefaults() : synth.voice2.get();
        this.voice3 = synth.voice3 === undefined ? Tone.MonoSynth.getDefaults() : synth.voice3.get();
        this.isMute = synth.isMute === undefined ? [false, true, true] : synth.isMute;
        this.pitch = synth.pitch === undefined ? [0, 0, 0] : synth.pitch;
        this.detuneVal = synth.detuneVal === undefined ? [0, 0, 0] : synth.detuneVal;

        if(this.voice1.volume > -10) {
            this.voice1.volume = -10;
        }
        if(this.voice2.volume > -10) {
            this.voice2.volume = -10;
        }
        if(this.voice3.volume > -10) {
            this.voice3.volume = -10;
        }


        this.voice1.filter.rolloff = -48;
        this.voice2.filter.rolloff = -48;
        this.voice3.filter.rolloff = -48;

        console.log(Tone.Reverb.getDefaults());
    }
}
