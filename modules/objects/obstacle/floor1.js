import Object from "../../object";

export default class DirtTile extends Object {
    constructor(x, y, width, height) {
        super('Obstacle', 'Dirt', x, y, '../../../assets/Transparent/Tilemap/tilemap_packed.png', width, height)

    }
}