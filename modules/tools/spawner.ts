import EntityManager from "../managers/entityManager.js";
import EventManager from "../managers/eventManager.ts";
import Enemy from "../objects/entity/enemy.ts";
import Particle from "../objects/other/particle.ts";
import Player from "../player/player.ts";

export default class Spawner {
    eventManager: EventManager;
    entityManager: EntityManager;
    data!: any | string | number | null;

    constructor(eventManager: EventManager, entityManager: EntityManager) {
        this.eventManager = eventManager
        this.entityManager = entityManager
        this.data;
    }

    async Spawn(type: string, x: number, y: number, name?: string)/* : Promise<Player | Enemy | Particle> */ {
        if (type != 'player') {
            if (!name) { throw new Error('To spawn an entity which is not the player a name must be provided to Spawn() method as an fourth argument.') };
            const path = `${type}/${name}`
            this.data = await fetch(`../../data/${path}.json`)
                .then(response => response.json())
                .then(data => {
                    return data; 
                })
                .catch(error => {
                    console.error('Error to load JSON:', error);
                });
        }
        switch (type) { 
            case ('player'): {
                const player = new Player(x, y, this.eventManager)
                this.entityManager.addEntity(player)
                this.eventManager.emit('spawned player', player)
                return player
            }
            case ('enemy'): {
                const { tileSheet } = this.data
                const enemy = new Enemy(x, y, name, tileSheet)
                this.entityManager.addEntity(enemy);
                this.eventManager.emit('spawned enemy', enemy)
                return enemy;
            }
        }
        this.data = null
    }

    Despawn(id: number): void {
        this.entityManager.removeEntity(id)
    }
}

