import Entity from "../entity";
import Player from "../../player/player";

export default class Enemy extends Entity {
    constructor(x: number, y: number, name: string, tileSheet: string) {
        super(x, y, 'enemy', name, tileSheet, 32, 13, 2, 2, 4)

    }

    handleCollision(object: Player | Enemy) {
        if (object.type == 'entity') {
            if (object.name == 'player') {
                //object.Damage(this.attack)
                
            }
        }
    }
}