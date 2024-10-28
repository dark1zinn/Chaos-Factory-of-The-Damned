import Player from './player.js'
import Gravity from './gravity.js'
import EntityManager from './entityManager.js';

export default class Game {
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

