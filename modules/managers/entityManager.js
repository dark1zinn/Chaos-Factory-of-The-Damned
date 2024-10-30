

export default class EntityManager {
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
        console.log(this.entities)
        this.entities.forEach(entity => entity.update());
    }

    draw(ctx) {
        this.entities.forEach(entity => entity.draw(ctx));
    }
}