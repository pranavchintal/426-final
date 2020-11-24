import * as Tone from 'tone';

export class BigBoyOptions {

    constructor(synth) {


        this.chorus = synth.chorus === undefined ? Tone.Chorus.getDefaults() : synth.chorus.get();
        this.reverb = synth.verb === undefined ? Tone.Reverb.getDefaults() : synth.verb.get();
        this.delay = synth.delay === undefined ? Tone.FeedbackDelay.getDefaults() : synth.delay.get();
        this.distortion = synth.dist === undefined ? Tone.Distortion.getDefaults() : synth.dist.get();
        this.chain = synth.chain === undefined ? [null, null, null, null] : synth.formatChain();
        this.voice1 = BigBoyOptions.getVoiceDefaults(synth.voice1);
        this.voice2 = BigBoyOptions.getVoiceDefaults(synth.voice2);
        this.voice3 = BigBoyOptions.getVoiceDefaults(synth.voice3);
        this.isMute = synth.isMute === undefined ? [false, true, true] : synth.isMute;
        this.pitch = synth.pitch === undefined ? [0, 0, 0] : synth.pitch;
        this.detuneVal = synth.detuneVal === undefined ? [0, 0, 0] : synth.detuneVal;



        // this.voice1.oscillator.type = "sawtooth32";
        // this.voice2.oscillator.type = "sawtooth32";
        // this.voice3.oscillator.type = "sawtooth32";
        

        // if(this.voice1.volume > -10) {
        //     this.voice1.volume = -10;
        // }
        // if(this.voice2.volume > -10) {
        //     this.voice2.volume = -10;
        // }
        // if(this.voice3.volume > -10) {
        //     this.voice3.volume = -10;
        // }

        // this.voice1.filter.rolloff = -48;
        // this.voice2.filter.rolloff = -48;
        // this.voice3.filter.rolloff = -48;

        // console.log(Tone.Reverb.getDefaults());
    }
}

BigBoyOptions.getVoiceDefaults = (voiceObj) => {

    let result;

    if(voiceObj === undefined) {
        result = Tone.MonoSynth.getDefaults();
        result.oscillator.type = "sawtooth32";
    } else {
        result = voiceObj.get();
    }

    if(result.volume > -10) result.volume = -10;

    result.filter.rolloff = -48;

    return result;
}
