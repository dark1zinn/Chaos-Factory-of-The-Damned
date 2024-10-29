import Player from './player.js'
import Gravity from './physics/gravity.js'
import EntityManager from './entityManager.js';
import EventManager from './eventManager.js';
import CollisionQuery from './physics/collisions/collisionQuery.js';
import DirtTile from './objects/obstacle/floor1.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false
        this.entityManager = new EntityManager();
        this.eventManager = new EventManager()
        this.gravity = new Gravity(this.entityManager.entities, 0.5);  //Issue that causes the player to vanish
        
        // Criar entidades iniciais
        this.player = new Player((canvas.width/2), (canvas.height/2), this.eventManager);
        this.entityManager.addEntity(this.player);
        this.dirt = new DirtTile(100, 400, 32, 32)
        this.entityManager.addEntity(this.dirt)
        
        this.collisionQuery = new CollisionQuery(this.canvas, this.player, this.eventManager, this.entityManager.entities)
        requestAnimationFrame(this.Loop.bind(this));
    }

    Loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entityManager.update();
        this.collisionQuery.update()
        this.entityManager.draw(this.ctx);
        //this.ctx.fillRect(this.player.x, this.player.y, -4, -4)
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

