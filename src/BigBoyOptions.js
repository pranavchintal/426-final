import * as Tone from 'tone';

export class BigBoyOptions {

    constructor(synth) {
        this.filter = synth.filter === undefined ? Tone.Filter.getDefaults() : synth.filter.get();
        this.chorus = synth.chorus === undefined ? Tone.Chorus.getDefaults() : synth.chorus.get();
        this.reverb = synth.verb === undefined ? Tone.Reverb.getDefaults() : synth.verb.get();
        this.delay = synth.delay === undefined ? Tone.FeedbackDelay.getDefaults() : synth.delay.get();
        this.distortion = synth.dist === undefined ? Tone.Distortion.getDefaults() : synth.dist.get();
        this.chain = synth.chain === undefined ? [this.filter, this.chorus, this.verb, this.delay, this.dist, Tone.Destination] : synth.chain;
        this.voice1 = synth.voice1 === undefined ? Tone.MonoSynth.getDefaults() : synth.voice1.get();
        this.voice2 = synth.voice2 === undefined ? Tone.MonoSynth.getDefaults() : synth.voice2.get();
        this.voice3 = synth.voice3 === undefined ? Tone.MonoSynth.getDefaults() : synth.voice3.get();

    }

}