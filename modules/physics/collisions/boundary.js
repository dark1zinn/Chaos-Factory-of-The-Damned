

export default class Boundary {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    contains(point) {
        // Verifica se um ponto está dentro dos limites do quadrante
        return point.x >= this.x &&
            point.x <= this.x + this.width &&
            point.y >= this.y &&
            point.y <= this.y + this.height;
    }

    intersects(range) {
        // Verifica se este quadrante intersecta outro retângulo (range)
        return !(range.x > this.x + this.width ||
            range.x + range.width < this.x ||
            range.y > this.y + this.height ||
            range.y + range.height < this.y);
    }
}