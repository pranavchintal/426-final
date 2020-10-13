## Soundbites

Soundbites is the COMP 426 final project of Pranav Chintalapudi, Will Ritchie and Sahith Reddy. It is a simple, intuitive synth building and sequencing playground meant for exploring the basics of audio synthesis. 

Original project proposal follows below: 

Our project goal is to create a simple music-making web app, in which users can use synthesizers and drum machines to create sounds and a sequencer to create compositions using those sounds.

Broad Scope
Minimum: A functional single-oscillator synthesizer web app with a keyboard interface, selectable waveforms and an ADSR envelope. A sequencer allowing for the creation of compositions using the synthesizer. Backend allowing for saving and loading of synth patches.
Loading patches can be done from a search bar (fulfilling requirement number five)
Database will contain patches made by all users.
Synth patches and sequencer patches are separate — user can load synth patches into compositions without overwriting what they’ve composed, and load sequencer patches without overwriting their synth patches.
Patches can be searched for by name or by the username of the patch creator.
Saved patches tied to individual user accounts.
You can still mess with the app without an account, but saving patches is disallowed.
Login prompt in the navigation bar.
Ideal: A music creation playground web app in the form of an interactive rack with sequencer. The user may add in combinations of synthesizers and drum machines, each with its own set of editable parameters, as they wish, and use the sequencer to create pieces of music with them. Backend allows for saving and loading of rack-wide and instrument-specific patches as well as sequencer patterns.
Backend possibly in the form of a pop-up modal displaying any or all of: patch names, patch screenshots, patch descriptions, etc.
Saved patches tied to individual user accounts.
User-created database. Different users upload different patches and anyone can access and download any of them. Option to filter by user's own saved patches.
Users can export compositions as mp3 files.
Drum machines composed of drum samples that fit a certain aesthetic (chiptune, realistic, 80s, etc.)
Mixing and matching of samples from different kits is allowed.
Frameworks
Tone.js (relies on WebAudio API)
React.js
Bootstrap
Google Firebase to store user data
