import Entity from "../../objects/entity";
import Enemy from "../../objects/entity/enemy";
import Player from "../../player/player";


export default class BoundingBall {
    id!: number;
    x: number;
    y: number;
    radius: number;
    entity!: Player | Enemy;
    acceleration: number;
    acc_x: number;
    acc_y: number;
    velocity_x: number;
    velocity_y: number;
    friction: number;
    stroke: boolean;
    strokeColor: string;

    constructor(x: number, y: number, r: number, speed: number, stroke?: boolean, strokeColor?: string) {
        this.id;
        this.x = x;
        this.y = y;
        this.radius = r;
        this.entity;
        this.acceleration = speed
        this.acc_x = 0;
        this.acc_y = 0;
        this.velocity_x = 0;
        this.velocity_y = 0;
        this.friction = 0.1;
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

    moveUp() {
        this.acc_y = -this.acceleration //must change this when appling gravity
    }

    moveDown() {
        this.acc_y = this.acceleration;
    }

    moveLeft() {
        this.acc_x = -this.acceleration;
    }

    moveRight() {
        this.acc_x = this.acceleration;
    }

    update() {
        this.velocity_x += this.acc_x
        this.x += this.velocity_x
        //this.entity.x += this.velocity_x
        this.velocity_y += this.acc_y
        this.y += this.velocity_y
        //this.entity.y += this.velocity_y
    }

    resetVelocity(vel: string) {
        if (vel == 'acc_x') {
            this.acc_x = 0;
        } else if (vel == 'acc_y') {
            this.acc_y = 0;
        }
    }
}