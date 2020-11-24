import {BigBoyOptions} from "./BigBoyOptions.js";

export class PatchObject {

    constructor(synthOptions, patchName, description, user) {
        this.synthOptions = synthOptions;
        this.patchName = patchName;
        this.description = description;
        this.user = user;
    }
}