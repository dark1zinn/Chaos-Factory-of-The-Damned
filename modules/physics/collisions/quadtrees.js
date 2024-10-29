import Boundary from "./boundary";

export default class Quadtree {
    constructor(boundary, capacity) {
        this.boundary = boundary; // Limites do quadrante
        this.capacity = capacity; // Número máximo de objetos por quadrante
        this.divided = false;
        this.objects = [];
        this.northwest = null;
        this.northeast = null;
        this.southwest = null;
        this.southeast = null;
    }

    // Método para inserir um objeto na quadtree
    insert(object) {
        if (!this.boundary.contains({"X":`${object.x}`, "Y":`${object.y}`})) {
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

    // Método para dividir o quadrante em quatro
    subdivide() {
        const x = this.boundary.x;
        const y = this.boundary.y;
        const w = this.boundary.width / 2;
        const h = this.boundary.height / 2;

    // Criando os limites dos novos quadrantes
        const northeast = new Boundary(x + w, y, w, h);
        const northwest = new Boundary(x, y, w, h);
        const southeast = new Boundary(x + w, y + h, w, h);
        const southwest = new Boundary(x, y + h, w, h);

        // Criando os novos quadrantes
        this.northeast = new Quadtree(northeast, this.capacity);
        this.northwest = new Quadtree(northwest, this.capacity);
        this.southeast = new Quadtree(southeast, this.capacity);
        this.southwest = new Quadtree(southwest, this.capacity);


        // Redistribuindo os objetos para os novos quadrantes
        for (let object of this.objects) {
            this.northeast.insert(object);
            this.northwest.insert(object);
            this.southeast.insert(object);
            this.southwest.insert(object);
        }

        this.objects = []; // Limpando a lista de objetos do quadrante atual
        this.divided = true;
    }

    // Método para obter todos os objetos dentro de um determinado retângulo
    query(range) {
        let found = []
        if (!this.boundary.intersects(range)) {
            return;
        } else if (!this.divided) {
            for (let object of this.objects) {
                if (range.contains(object.position)) {
                    found.push(object);
                }
            }
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

