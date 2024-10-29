import Movement from "./playerMovement"
import inputListener from "./inputListener"

const spriteSheet = new Image()
spriteSheet.src = './assets/Transparent/Tilemap/tilemap.png'

export default class Player {
    constructor(x, y, eventManager) {
        this.spriteSheet = spriteSheet
        //this.character = character ? character : 1
        this.id = 0
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 8;
        this.health = 10;
        this.speed = 5;
        this.velocityY = 0; 
        this.jumping = false;
        this.movement = new Movement(this)
        this.eventManager = eventManager
    }
  
    jump() {
        if (!this.jumping) {
            this.velocityY = -15; // Ajuste o valor para controlar a altura do pulo
            this.jumping = true;
        }
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
        ctx.drawImage(this.spriteSheet, 8, 8*7, this.width, this.height, this.x, this.y, 32, 32);
    }

    update() {
        this.movement.handleInput(inputListener(), this.eventManager)
    }
}
  

