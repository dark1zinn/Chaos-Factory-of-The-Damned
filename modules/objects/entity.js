import Object from "./object";

export default class Entity extends Object {
    constructor(x, y, role, name, tileSheet, size, health, attack, speed, jumpForce) {
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

    Damage(dmg) {
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