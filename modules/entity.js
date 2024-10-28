

export default class Entity {
    constructor(id, x, y, tileSheet, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.tileSheet = new Image().src = tileSheet
        this.width = width;
        this.height = height;
        // Outras propriedades específicas da entidade (velocidade, tipo, etc.)
    }

    update() {
        // Lógica de atualização da entidade
    }

    draw(ctx) {
        // Lógica de renderização da entidade
        ctx.drawImage(this.tileSheet, sx, sy, sw, sh, dx, dy, dw, dh)
    }
}