import Entity from "../entity";

export default class Enemy extends Entity {
    constructor(x, y, name, tileSheet) {
        super(x, y, 'enemy', name, tileSheet, 32, 13, 2, 2, 4)

    }

    handleCollision(object) {
        if (object.type == 'entity') {
            if (object.name == 'player') {
                //object.Damage(this.attack)
                
            }
        }
    }
}