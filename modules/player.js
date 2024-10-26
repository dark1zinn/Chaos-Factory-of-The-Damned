

// spritesheet is whithin ./assets/transparent/tilemap/tilemap_packed.png
const spriteSheet = new Image()
spriteSheet.src = './assets/Transparent/Tilemap/tilemap.png'

export default class Player {
    constructor(x, y, character) {
        this.spriteSheet = spriteSheet
        this.character = character ? character : 1
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.health = 10;
        this.speed = 5;
        this.velocityY = 0; // Velocidade vertical para o pulo
        this.jumping = false; // Flag para indicar se o jogador está pulando
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
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
  

