import Player from "../player/player.ts";
import Enemy from "../objects/entity/enemy.ts";

export default class EntityManager {
    objects: (Player | Enemy)[];
    enemies: Enemy[];
    nextId: number;

    constructor() {
        this.objects = []; //add filter
        this.enemies = []
        this.nextId = 0;
    }

    filter(): void {
        this.enemies = [];
        this.objects.forEach(object => {if(object.role == 'enemy'){ this.enemies.push(object) }})
    }

    addEntity(entity: Player | Enemy): void {
        entity.id = this.nextId++;
        this.objects.push(entity);
        this.filter()
        entity.boundingBall.entity = entity; entity.boundingBall.id = entity.id;
    }

    removeEntity(id: number): void {
        this.objects = this.objects.filter(entity => entity.id !== id);
        this.enemies = this.enemies.filter(entity => entity.id !== id);
    }

    update(): void {
        this.objects.forEach(entity => entity.update());
    }

    draw(ctx: CanvasRenderingContext2D): void {
        //this.objects.forEach(object => object.draw(ctx));
        for (const object of this.objects) {
            object.draw(ctx);
            object.boundingBall.drawBall(ctx)
        };
    }
}