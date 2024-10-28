import Movement from "./playerMovement"
import inputListener from "./inputListener"

const spriteSheet = new Image()
spriteSheet.src = './assets/Transparent/Tilemap/tilemap.png'

export default class Player {
    constructor(x, y) {
        this.spriteSheet = spriteSheet
        //this.character = character ? character : 1
        this.id = 0
        this.x = x;
        this.y = y;
        this.width = 8;
        this.height = 8;
        this.health = 10;
        this.speed = 5;
        this.velocityY = 0; // Velocidade vertical para o pulo
        this.jumping = false; // Flag para indicar se o jogador está pulando
        this.movement = new Movement(this)
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
        ctx.drawImage(this.spriteSheet, 8*8, 8, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update() {
        this.movement.handleInput(inputListener())
    }
}
  

