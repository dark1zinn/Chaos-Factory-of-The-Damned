

export default class BoundingBox {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    isColliding(other) {
        return !(this.x + this.width < other.x ||
            other.x + other.width < this.x ||
            this.y + this.height < other.y ||
            other.y + other.height < this.y);
    }
}

