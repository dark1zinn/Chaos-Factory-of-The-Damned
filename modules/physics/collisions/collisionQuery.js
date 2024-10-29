import Quadtree from "./quadtrees";
import Boundary from "./boundary";

export default class CollisionQuery {
    constructor(canvas, player, eventManager, objects) {
        this.canvas = canvas
        this.player = player
        this.objects = objects; //this should be an array with the objects, also they should have .x .y and .width .height
        this.eventManager = eventManager
        this.quadtree = new Quadtree(new Boundary(0, 0, this.canvas.width, this.canvas.height), 150); // new quadtree with screen/canvas limits
    }

    update() {
        // Limpando a quadtree e reinserindo todos os objects
        this.quadtree = new Quadtree(new Boundary(0, 0, this.canvas.width, this.canvas.height), 10);
        for (const object of this.objects) {
            this.quadtree.insert(object);
        }

        // Verificando colisão do jogador com os inimigos
        const range = new Boundary(this.player.x, this.player.y, this.player.width, this.player.width);
        const potentialCollisions = this.quadtree.query(range);
        //console.log(range)

        for (const object of potentialCollisions) {
            if (this.player.boundingBox.isColliding(object)) {
                // Handle collision
                if (object.name == 'enemy') { object.handleCollision(this.player) }
                this.player.handleCollision(object)
                console.log("Colisão com inimigo!");
            }
        }
    }
}