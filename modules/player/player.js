import Movement from "./playerMovement"
import Entity from "../objects/entity"

export default class Player extends Entity {
    constructor(x, y, eventManager) {
        super(x, y, 'player', 'player', '../../assets/Transparent/Tilemap/tilemap_packed.png', 32, 10, 3, 3, 4)

        this.eventManager = eventManager
        this.movement = new Movement(this, this.eventManager)
    }

    handleCollision(object) {
        switch (object.type) {
            case (enemy): {
                this.health -= object.attack
                break
            }
            case (platform): {
                if (this.y > object.y) { console.error('player went through the floor') }
                break
            }
        }
    }

    update() {
        this.movement.handleInput()
        //const pos = { "X":`${this.x}`, "Y":`${this.y}` }
        //console.log(pos)
    }
}


