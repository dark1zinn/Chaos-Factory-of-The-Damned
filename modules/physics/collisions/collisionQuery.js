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
            const range = new Boundary(collider.x-5, collider.y-5, collider.width+5, collider.width+5); //then if theres somenthing in, it checks the actual hitbox
            let potentialCollisions = this.quadtree.query(range);
            potentialCollisions = potentialCollisions.filter(potential => potential.id !== collider.id)
            console.log(potentialCollisions)
            for (const object of potentialCollisions) {
                console.log(collider)
                //console.log(object)
                //if (object.id == collider.id) { return }
                if (collider.boundingBox.isColliding(object.boundingBox.box)){ console.log( `${collider.name}/${collider.id} collided with ${object.name}/${object.id}` ) }
                collider.handleCollision(object)
            }
        }
    }
}