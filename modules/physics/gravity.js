

export default class Gravity {
    constructor(entities, canvas, gravity) {
        this.entities = entities; // Array com as entidades afetadas pela gravidade
        this.gravity = gravity; // Força da gravidade
        this.canvas = canvas
    }

    update() {
        this.entities.forEach(entity => {
            entity.velocityY += this.gravity;
            entity.y += entity.velocityY;

            // Verificar colisão com o chão (implementar conforme sua lógica de jogo)
            if (entity.y + entity.height >= this.canvas.height) {
                entity.y = this.canvas.height - entity.height;
            }
        });
    }
}