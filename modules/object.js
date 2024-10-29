import BoundingBox from "./physics/collisions/boundingBox";

export default class Object {
    constructor(type, name, x, y, tileSheet, width, height) {
        this.id = 0; //initialy its 0 but the EntityManager will correct this later
        this.type = type
        this.name = name
        this.width = width;
        this.height = height;
        this.x = x + (this.width / 2);
        this.y = y + (this.height / 2);
        this.tileSheet = new Image()
        this.tileSheet.src = tileSheet
        this.boundingBox = new BoundingBox(x, y, this.width, this.height)
    }

    draw(ctx) {
        // object rendering logic
        ctx.drawImage(this.spriteSheet, this.spriteWidth, this.spriteHeight * 6, this.spriteWidth, this.spriteHeight, this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height)
    }
}