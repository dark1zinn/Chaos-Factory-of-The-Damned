

export default class EntityManager {
    constructor() {
        this.objects = []; //add filter
        this.types = {
            entity: [],
            enemies: [],
            particle: [],
        }
        this.nextId = 0;
    }

    filter() {
        this.types.entity = []; this.types.enemies = []; this.types.particle = [];
        this.objects.forEach(object => {if(object.type == 'entity'){ this.types.entity.push(object) }})
        this.objects.forEach(object => {if(object.role == 'enemy'){ this.types.enemies.push(object) }})
        this.objects.forEach(object => {if(object.type == 'particle'){ this.types.particle.push(object) }})
    }

    addEntity(entity) {
        entity.id = this.nextId++;
        this.objects.push(entity);
        this.filter()
    }

    removeEntity(id) {
        this.objects = this.objects.filter(entity => entity.id !== id);
        this.types.entity = this.types.entity.filter(entity => entity.id !== id);
        this.types.enemies = this.types.enemies.filter(entity => entity.id !== id);
        this.types.particle = this.types.particle.filter(entity => entity.id !== id);
    }

    update() {
        //console.log(this.objects)
        //console.log(this.types)
        this.types.entity.forEach(entity => entity.update());
    }

    draw(ctx) {
        this.objects.forEach(object => object.draw(ctx));
    }
}