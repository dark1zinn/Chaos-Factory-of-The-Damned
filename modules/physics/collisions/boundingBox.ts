

export default class BoundingBox {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x-10;
        this.y = y-10;
        this.width = width+10;
        this.height = height+10;
    }

    isColliding(other: { x: number, y: number, width: number, height: number }): boolean {
        return (
            this.x + this.width < other.x ||
            other.x + other.width < this.x ||
            this.y + this.height < other.y ||
            other.y + other.height < this.y
        );
    }

    box() {
        const box = { x: this.x, y: this.y, width: this.width, height: this.height }
        return box
    }
}

