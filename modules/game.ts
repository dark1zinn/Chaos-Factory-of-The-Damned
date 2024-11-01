import Gravity from './physics/gravity.ts'
import EntityManager from './managers/entityManager.ts';
import EventManager from './managers/eventManager.ts';
import CollisionQuery from './physics/collisions/collisionQuery.ts';
import Spawner from './tools/spawner.ts';
import Player from './player/player.ts'

export default class Game {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    gameOver: boolean;
    entityManager: EntityManager;
    eventManager: EventManager;
    spawner: Spawner;
    player!: Player;
    gravity: Gravity;
    collisionQuery: CollisionQuery;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.ctx.imageSmoothingEnabled = false
        this.gameOver = false
        this.entityManager = new EntityManager();
        this.eventManager = new EventManager()
        this.spawner = new Spawner(this.eventManager, this.entityManager)
        this.player; this.spawner.Spawn('player', 200, 500) //spawns the player
        this.gravity = new Gravity(this.entityManager.objects, canvas, 0.5);  //Issue that causes the player to vanish
        
        //this.eventManager.subscribe('spawned player', (data) => )
        this.spawner.Spawn('enemy', 300, 600, 'test')

        this.collisionQuery = new CollisionQuery(this.canvas, this.eventManager, this.entityManager.objects)
        requestAnimationFrame(this.Loop.bind(this));
    }

    Loop(): void {
        if (this.gameOver) { return }
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.entityManager.update();
        this.collisionQuery.update()
        this.entityManager.draw(this.ctx);
        
        requestAnimationFrame(this.Loop.bind(this));
    }

    Over(): void {
        this.gameOver = true
    }

    Depurer() { //not working
        // Criar o logger
        //const logger = this.eventManager.subscribeAll((data: any) => { console.log(`Evento: ${eventName}, Dados: ${JSON.stringify(data)}`) })
        //return logger
        //this.eventManager.subscribeAll(logger.logEvent);
        //return depurer.innerHTML = `
        //<span>Depurer console:</span><br><br>
        //<span>${logger}</span>
        //`
    }
}

