class Gravity {
    constructor(entities, gravity) {
        this.entities = entities; // Array com as entidades afetadas pela gravidade
        this.gravity = gravity; // Força da gravidade
    }

    update() {
        this.entities.forEach(entity => {
            entity.velocityY += this.gravity;
            entity.y += entity.velocityY;

            // Verificar colisão com o chão (implementar conforme sua lógica de jogo)
            if (entity.y + entity.height >= canvas.height) {
                entity.y = canvas.height - entity.height;
                entity.velocityY = 0;
                entity.jumping = false;
            }
        });
    }
}