import Quadtree from "./quadtrees";
import Boundary from "./boundary";

export default class CollisionQuery {
    constructor(canvas, eventManager, objects) {
        this.canvas = canvas
        this.objects = objects; //this should be an array with the objects, also they should have .x .y and .width .height
        this.eventManager = eventManager
        this.quadtree = new Quadtree(new Boundary(0, 0, this.canvas.width, this.canvas.height), 150); // new quadtree with screen/canvas limits
    }

    update() {
        // cleans quatree and reinsert objects
        this.quadtree = new Quadtree(new Boundary(0, 0, this.canvas.width, this.canvas.height), 150);
        for (const object of this.objects) {
            this.quadtree.insert(object);
        }
        //console.log(this)

        for (const collider of this.objects) {
            // object collision with other objects
            console.log('1')
            const range = new Boundary(collider.x - 5, collider.y - 5, collider.width + 5, collider.width + 5);
            console.log(collider);
            //console.log(range);
            let potentialCollisions = this.quadtree.query(range);
            console.log({'before':potentialCollisions})
            //potentialCollisions = potentialCollisions.filter(potential => potential.id !== collider.id)
            //console.log({'after':potentialCollisions})
            if (potentialCollisions.length != 0) {
                for (const object of potentialCollisions) {
                    if (collider.boundingBox.isColliding(object.boundingBox.box())){ console.log( `${collider.name}/${collider.id} collided with ${object.name}/${object.id}` ) }
                    collider.handleCollision(object)
                }
            }
        }
    }
}