

export default class Boundary {
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // verifies if a XY point is inside a range/rectangle
    contains(point: { x: number, y: number }): boolean {
        if (
            point.x >= this.x &&
            point.x <= this.x + this.width &&
            point.y >= this.y &&
            point.y <= this.y + this.height
        ) { return true } else { return false };
    }

    // verifies if one range/rectangle intersects another
    intersects(range: Boundary | { x: number, y: number, width: number, height: number }) {
        return !(
            range.x > this.x + this.width ||
            range.x + range.width < this.x ||
            range.y > this.y + this.height ||
            range.y + range.height < this.y
        );
    }
}