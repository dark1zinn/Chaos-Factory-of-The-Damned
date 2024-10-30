import Enemy from "../objects/entity/enemy.js";
import Player from "../player/player.js";

export default class Spawner {
    constructor(eventManager, entityManager) {
        this.eventManager = eventManager
        this.entityManager = entityManager
        this.data = null
    }

    async Spawn(type, x, y, name) {
        if (type != 'player') {
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
                this.entityManager.addEntity(new Player(x, y, this.eventManager))
                break
            }
            case ('enemy'): {
                const { tileSheet } = this.data
                this.entityManager.addEntity(new Enemy(x, y, name, tileSheet));
            }
        }
    }
}