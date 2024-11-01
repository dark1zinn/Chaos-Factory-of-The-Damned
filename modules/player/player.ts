import Movement from "./playerMovement.ts"
import Entity from "../objects/entity.ts";
import EventManager from '../managers/eventManager.ts'
import Enemy from "../objects/entity/enemy.ts";
import Particle from "../objects/other/particle.ts";

export default class Player extends Entity {
    private eventManager: EventManager;
    private movement: Movement;

    constructor(x: number, y: number, eventManager: EventManager) {
        super(x, y, 'player', 'player', '../../assets/Transparent/Tilemap/tilemap_packed.png', 32, 10, 3, 1, 4)
        
        this.eventManager = eventManager
        this.movement = new Movement(this, this.eventManager)
    }

    handleCollision(object: Enemy | Particle) {
        //console.log(`player collided with ${object.name}`)
    }

    update() {
        if (this.health <= 0) { console.log('you died lol') } //to-do GameOver logic
        this.movement.handleInput()
        this.x = this.boundingBall.x
        this.y = this.boundingBall.y
        //const pos = { "X":`${this.x}`, "Y":`${this.y}` }
        //console.log(pos)
    }
}


