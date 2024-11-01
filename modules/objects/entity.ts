import BoundingBall from "../physics/collisions/boundingBall.ts";
import BoundingBox from "../physics/collisions/boundingBox.ts";
import Object from "./object.ts";

export default class Entity extends Object {
    id: number;
    role: string;
    health: number;
    attack: number;
    jumpForce: number;
    boundingBox: BoundingBox;
    boundingBall: BoundingBall;

    constructor(x: number, y: number, role: string, name: string, tileSheet: string, size: number, health: number, attack: number, speed: number, jumpForce: number) {
        super('entity', name, x, y, tileSheet, size, size)

        this.id = 0
        this.role = role
        this.health = health
        this.attack = attack
        this.jumpForce = -jumpForce
        this.boundingBox = new BoundingBox(x, y, this.width, this.height);
        this.boundingBall = new BoundingBall( this.x, this.y, this.width / 2, speed, true)
    }

    update() {
        //console.log('entity')
        //this.boundingBall.update()
        this.x = this.boundingBall.x
        this.y = this.boundingBall.y
    }

    Damage(dmg: number): void {
        if (this.role == 'particle') { return }
        //this.health -= dmg //do better math for this later + add defense for dmg reduction
        
    }

    jump() {
        this.boundingBall.moveUp()
    }
    
    moveDown() {
        this.boundingBall.moveDown()
    }
    
    moveLeft() {
        this.boundingBall.moveLeft()
    }
    
    moveRight() {
        this.boundingBall.moveRight()
    }

    resetVelocity(vel: string) {
        this.boundingBall.resetVelocity(vel)
    }
}