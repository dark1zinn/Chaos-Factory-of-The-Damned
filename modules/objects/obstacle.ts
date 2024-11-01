import Object from "./object";

export default class Obstacle extends Object {
    constructor(x: number, y: number, width: number, height: number) {
        super('obstacle', 'Dirt', x, y, '../../../assets/Transparent/Tilemap/tilemap_packed.png', width, height)

    }
}