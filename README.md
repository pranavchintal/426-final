# Soundbites
#### A synthesizer building playground built on Tone.js.

Soundbites is the COMP 426 final project of Pranav Chintalapudi, Will Ritchie, and Sahith Desham. It's built so anyone can experience the fun of messing around with a synthesizer and creating awesome sounds, without a lick of musical or synth experience. The app is still under active development -- pardon our dust!

## Getting Started
Soundbites is simple to use. Click on any control on the Creator to start the synth up, and use the letter keys on your keyboard to play notes. Think of the keys as a piano keyboard, like this illustration:

![computer piano keyboard](https://answers.presonus.com/?qa=blob&qa_blobid=4739542159000864423)

If you're feeling adventurous (we hope you are!), play around with the sliders and knobs to get a feel for what they all do. If you'd like an explainer, one follows below.

## How The Synth Works
The core of Soundbites is our powerful synth engine. It's laid out in a chain: Oscillators create a tone, which passes through the amplitude envelope, then the filter envelope, then the effects, and finally out of your speakers. Each component modifies the sound in some way, and, other than the envelopes, each can be switched on and off at will. Brief explanations of the components follow:

### Oscillator
Oscillators are the parts of a synth that create sound. They generate a basic waveform -- in the case of Soundbites, a sine, sawtooth or square wave, each with their own sound -- which is then further modified by the **Pitch** and **Detune** controls. The Pitch knob adjusts the fundamental pitch of the oscillator in semitones, from -1 to +1 octave. The Detune slider then fine-tunes the pitch in a range of -0.1 to +0.1 semitones. The **Level** control modifies the volume of its corresponding oscillator. With three oscillators, plenty of interesting tones can be generated without using any effects at all.

### Amplitude Envelope
The amplitude envelope essentially controls the amplitude (or volume) of the synth's waveform over time. The **Attack** control dictates how long it takes the synth to reach its maximum volume after a key is pressed. The **Decay** control dictates how long it takes the volume to decrease to the level set by the **Sustain** control while the key is held. The **Release** control dictates how long it takes for the sound to fade to silence after the key is released. For example, a short, percussive pluck would have very short Attack, very short Decay, no Sustain, and very short Release. A long pad sound would have medium to long Attack, long Decay, medium to high Sustain, and long Release. 

### Filter Envelope
The filter envelope controls both the frequency range of the synth's waveform and how that frequency range is applied over time. The **Cutoff** knob controls the cutoff frequency of the synth's low-pass filter -- essentially, the frequency above which the sound is muted. A deep bass synth might have quite a low cutoff, while a sharp lead synth might have a high cutoff. The **Warp** knob mangles the filter to various degrees (play around with it!). The **Attack, Decay, Sustain,** and **Release** controls all function the same as those in the amplitude envelope, except rather than controlling the volume of the waveform over time, they control the volume of the filter.

### Reverb
An effect that adds a long tail of reverberation to your sound. Think singing in a cathedral. The **Decay** knob controls the length of the reverb tail, the **Delay** knob adds up to 500ms of delay time to the start of the reverb tail, and the **Amount** knob controls how much reverb is mixed into your signal.

### Distortion
You already know what it is. The **Gain** knob controls the power of the distortion, and the **Amount** knob controls how much distortion is mixed into your signal.

### Delay
Adds a string of repeating echoes to your sound. The **Time** knob controls the time between each repeat, the **Fdbk** knob controls the amount of repeats fed back into the delay (essentially increasing the number of repeats), and the **Amount** knob controls how much delay is mixed into your signal.

### Chorus
Adds a subtle watery, pulsing effect to your sound by detuning and delaying half the signal. The **Rate** knob controls the speed of the pulse, the **Delay** knob controls the amount of delay and the **Depth** knob controls the amount of detune.

## Tools & Technologies
Soundbites runs on
- Tone.js
- React.js
- Firebase Authentication
- Firebase Firestore
