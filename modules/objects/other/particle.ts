import Object from "../object";

export default class Particle extends Object {
    constructor(x: number, y: number, name: string, width: number, height: number, tileSheet: string) {
        super('particle', name, x, y, tileSheet, width, height)
    }

    handleCollision(): void {
        
    }
}