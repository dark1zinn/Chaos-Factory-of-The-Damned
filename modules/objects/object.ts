import BoundingBox from "../physics/collisions/boundingBox.ts";

export default class Object {
    id: number;
    type: string;
    name: string;
    width: number;
    height: number;
    spriteWidth: number;
    spriteHeight: number;
    x: number;
    y: number;
    tileSheet: HTMLImageElement;
    boundingBox: BoundingBox;

    constructor(type: string, name: string, x: number, y: number, tileSheet: string, width: number, height: number) {
        this.id = 0; //initialy its 0 but the EntityManager will correct this later
        this.type = type
        this.name = name
        this.width = width;
        this.height = height;
        this.spriteWidth = 8
        this.spriteHeight = 8
        this.x = x + (this.width / 2);
        this.y = y + (this.height / 2);
        this.tileSheet = new Image()
        this.tileSheet.src = tileSheet
        this.boundingBox = new BoundingBox(x, y, this.width, this.height)
    }

    // object rendering logic
    draw(ctx: CanvasRenderingContext2D): void {
        ctx.drawImage(this.tileSheet, this.spriteWidth, this.spriteHeight * 6, this.spriteWidth, this.spriteHeight, this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height)
    }
}