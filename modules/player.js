import Movement from "./playerMovement"
import BoundingBox from "./physics/collisions/boundingBox"

const spriteSheet = new Image()
spriteSheet.src = './assets/Transparent/Tilemap/tilemap_packed.png'

export default class Player {
    constructor(x, y, eventManager) {
        this.spriteSheet = spriteSheet
        //this.character = character ? character : 1
        this.id = 0
        this.type = 'player'
        this.name = 'player'
        this.width = 32;
        this.height = 32;
        this.x = x+(this.width/2);
        this.y = y + (this.height / 2);
        this.boundingBox = new BoundingBox(x, y, this.width, this.height)
        this.spriteWidth = 8;
        this.spriteHeight = 8;
        this.health = 10;
        this.speed = 4;
        this.jumpHeight = -3; // Ajuste o valor para controlar a altura do pulo
        this.eventManager = eventManager
        this.movement = new Movement(this, this.eventManager)
    }
  
    jump() {
        this.y += this.jumpHeight
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
  
    draw(ctx) {
        ctx.drawImage(this.spriteSheet, this.spriteWidth, this.spriteHeight*6, this.spriteWidth, this.spriteHeight, this.x-(this.width/2), this.y-(this.height/2), this.width, this.height);
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
  

