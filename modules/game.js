import Player from './player.js'
import Gravity from './gravity.js'
import EntityManager from './entityManager.js';
import EventManager from './eventManager.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false
        this.entityManager = new EntityManager();
        this.eventManager = new EventManager()
        this.logs = ""
        //this.gravity = new Gravity(this.entityManager.entities, 0.5);  //Issue that causes the player to vanish

        // Criar entidades iniciais
        this.player = new Player(100, 300, this.eventManager);
        this.entityManager.addEntity(this.player);
        // ... adicionar mais entidades

        requestAnimationFrame(this.Loop.bind(this));
    }

    Loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entityManager.update();
        this.entityManager.draw(this.ctx);
        //this.gravity.update()
        requestAnimationFrame(this.Loop.bind(this)); //console.log("animate");
    }

    Depurer() { //not working
        // Criar o logger
        const logger = this.eventManager.subscribeAll((data) => { console.log(`Evento: ${eventName}, Dados: ${JSON.stringify(data)}`)})
        this.eventManager.subscribeAll(logger.logEvent);
        //return depurer.innerHTML = `
        //<span>Depurer console:</span><br><br>
        //<span>${logger}</span>
        //`
    }
}

