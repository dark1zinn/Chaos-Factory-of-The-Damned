import Enemy from "../../objects/entity/enemy";
import Particle from "../../objects/other/particle";
import Player from "../../player/player";
import Boundary from "./boundary";

export default class Quadtree {
    boundary: Boundary;
    capacity: number;
    divided: boolean;
    objects: (Player | Enemy | Particle)[];
    northwest!: Quadtree;
    northeast!: Quadtree;
    southwest!: Quadtree;
    southeast!: Quadtree;

    constructor(boundary: Boundary, capacity: number) {
        this.boundary = boundary; // the quad range/rectangle
        this.capacity = capacity; // object limit in the quad range
        this.divided = false;
        this.objects = [];
        this.northwest;
        this.northeast;
        this.southwest;
        this.southeast;
    }

    // insert objects in the quad
    insert(object: Player | Enemy | Particle): void {
        if (!this.boundary.contains({ x: object.x, y: object.y })) {
            console.log('returned')
            return;
        }

        if (this.objects.length < this.capacity) {
            this.objects.push(object);
        } else {
            if (!this.divided) {
                this.subdivide();
            }

            this.northwest.insert(object);
            this.northeast.insert(object);
            this.southwest.insert(object);
            this.southeast.insert(object);
        }
    }

    // subdivides the actual quad into 4 smaller quads
    subdivide(): void {
        const x = this.boundary.x;
        const y = this.boundary.y;
        const w = this.boundary.width / 2;
        const h = this.boundary.height / 2;

        // the smaller quads ranges
        const northeast = new Boundary(x + w, y, w, h);
        const northwest = new Boundary(x, y, w, h);
        const southeast = new Boundary(x + w, y + h, w, h);
        const southwest = new Boundary(x, y + h, w, h);

        // creating the quads
        this.northeast = new Quadtree(northeast, this.capacity);
        this.northwest = new Quadtree(northwest, this.capacity);
        this.southeast = new Quadtree(southeast, this.capacity);
        this.southwest = new Quadtree(southwest, this.capacity);


        // redistributing the objects across these new quads
        for (let object of this.objects) {
            this.northeast.insert(object);
            this.northwest.insert(object);
            this.southeast.insert(object);
            this.southwest.insert(object);
        }

        this.objects = []; // cleaning object list of the actual quad
        this.divided = true;
    }

    // get all objects in a rectangle (range)
    query(range: Boundary): any[] | null {
        let found: (Player | Enemy | Particle)[] | any[] = []
        if (!this.boundary.intersects(range)) {
            return null;
        } else if (!this.divided) {
            for (let object of this.objects) {
                if (range.intersects(object.boundingBox.box())) {
                    found.push(object); console.log(object)
                }
            }; console.log(found);
            return found
        }else {
            found[northwest] = this.northwest.query(range);
            found[northeast] = this.northeast.query(range);
            found[southwest] = this.southwest.query(range);
            found[southeast] = this.southeast.query(range);
            return found
        }
    }
}

