import Enemy from "../objects/entity/enemy";
import Particle from "../objects/other/particle";
import Player from "../player/player";


export default class Gravity {
    entities: (Player | Enemy | Particle)[];
    gravity: number;
    canvas: HTMLCanvasElement;

    constructor(entities: (Player | Enemy | Particle)[], canvas: HTMLCanvasElement, gravity: number) {
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