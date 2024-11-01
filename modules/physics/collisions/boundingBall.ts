

export default class BoundingBall {
    x: number;
    y: number;
    radius: number;
    stroke: boolean;
    strokeColor: string;

    constructor(x: number, y: number, r: number, stroke?: boolean, strokeColor?: string) {
        this.x = x;
        this.y = y;
        this.radius = r;
        this.stroke = stroke ? stroke : false;
        this.strokeColor = strokeColor ? strokeColor : 'green';
    }

    drawBall(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = this.strokeColor;
        if (this.stroke) { ctx.stroke() };
        ctx.closePath();
    }
}