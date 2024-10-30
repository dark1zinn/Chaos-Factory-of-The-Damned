import Object from "../object";

export default class Particle extends Object {
    constructor(x, y, name, width, height, tileSheet) {
        super('particle', name, x, y, tileSheet, width, height)
    }
}