//import Game from './modules/game.js'
import Gravity from './modules/gravity.js'
//import EntityManager from './entityManager.js';
import Movement from "./modules/playerMovement.js"
import inputListener from "./modules/inputListener.js"

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let CANVAS_WIDTH = canvas.width
let CANVAS_HEIGHT = canvas.height

//comparison, they should output the same value
console.log(CANVAS_WIDTH+" - "+CANVAS_HEIGHT)
console.log(window.innerWidth+" - "+window.innerHeight)


const spriteSheet = new Image()
spriteSheet.src = './assets/Transparent/Tilemap/tilemap.png'
class Player {
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
        this.velocityY = 0;
        this.jumping = false;
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
        ctx.drawImage(this.spriteSheet, 8 * 8, 8, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update() {
        this.movement.handleInput(inputListener())
    }
}

class EntityManager {
    constructor() {
        this.entities = [];
        this.nextId = 0;
    }

    addEntity(entity) {
        entity.id = this.nextId++;
        this.entities.push(entity);
    }

    removeEntity(id) {
        this.entities = this.entities.filter(entity => entity.id !== id);
    }

    update() {
        this.entities.forEach(entity => entity.update());
    }

    draw(ctx) {
        this.entities.forEach(entity => entity.draw(ctx));
    }
}

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.entityManager = new EntityManager();
        this.gravity = new Gravity(this.entityManager.entities, 0.5);

        // Criar entidades iniciais
        this.player = new Player(100, 100);
        this.entityManager.addEntity(this.player);
        // ... adicionar mais entidades

        requestAnimationFrame(this.Loop.bind(this));
    }

    Loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entityManager.update();
        this.entityManager.draw(this.ctx);
        this.gravity.update()
        requestAnimationFrame(this.Loop.bind(this)); console.log("animate");
    }

    Depurer(depurer) {
        let log = []
        return depurer.innerHTML = `
    <h4>Depurer console:</h4><br><br>
    <span>${log}</span>
    `

    }
}


const game = new Game(canvas)
//game.Loop()

const depurer = document.getElementById('depurer')
game.Depurer(depurer)


