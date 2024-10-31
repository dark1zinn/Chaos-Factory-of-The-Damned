import Object from "./object";

export default class Obstacle extends Object {
    constructor(x, y, width, height) {
        super('obstacle', 'Dirt', x, y, '../../../assets/Transparent/Tilemap/tilemap_packed.png', width, height)

    }
}