import Object from "./object.ts";

export default class Entity extends Object {
    id: number;
    role: string;
    health: number;
    attack: number;
    speed: number;
    jumpForce: number;

    constructor(x: number, y: number, role: string, name: string, tileSheet: string, size: number, health: number, attack: number, speed: number, jumpForce: number) {
        super('entity', name, x, y, tileSheet, size, size)

        this.id = 0
        this.role = role
        this.health = health
        this.attack = attack
        this.speed = speed
        this.jumpForce = -jumpForce
    }

    update() {
        //console.log('entity')
    }

    Damage(dmg: number): void {
        if (this.role == 'particle') { return }
        this.health -= dmg //do better math for this later + add defense for dmg reduction
        
    }

    jump() {
        this.y += this.jumpForce
    }

    moveDown() {
        this.y += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}