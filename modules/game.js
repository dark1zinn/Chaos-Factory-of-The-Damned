import Gravity from './physics/gravity.js'
import EntityManager from './managers/entityManager.js';
import EventManager from './managers/eventManager.js';
import CollisionQuery from './physics/collisions/collisionQuery.js';
import Spawner from './tools/spawner.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false
        this.gameOver = false
        this.entityManager = new EntityManager();
        this.eventManager = new EventManager()
        this.spawner = new Spawner(this.eventManager, this.entityManager)
        this.player = this.spawner.Spawn('player', 200, 500) //spawns the player
        this.gravity = new Gravity(this.entityManager.filter.entity, 0.5);  //Issue that causes the player to vanish
        
        //this.eventManager.subscribe('spawned player', (data) => )
        this.spawner.Spawn('enemy', 300, 600, 'test')

        this.collisionQuery = new CollisionQuery(this.canvas, this.eventManager, this.entityManager.objects)
        requestAnimationFrame(this.Loop.bind(this));
    }

    Loop() {
        if (this.gameOver) { return }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entityManager.update();
        this.collisionQuery.update()
        this.entityManager.draw(this.ctx);
        
        requestAnimationFrame(this.Loop.bind(this));
    }

    Over() {
        this.gameOver = true
    }

    Depurer() { //not working
        // Criar o logger
        const logger = this.eventManager.subscribeAll((data) => { console.log(`Evento: ${eventName}, Dados: ${JSON.stringify(data)}`) })
        return logger
        //this.eventManager.subscribeAll(logger.logEvent);
        //return depurer.innerHTML = `
        //<span>Depurer console:</span><br><br>
        //<span>${logger}</span>
        //`
    }
}

