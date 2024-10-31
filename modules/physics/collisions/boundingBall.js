

export default class BoundingBall {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.radius = r
    }

    drawBall() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.closePath();
    }
}