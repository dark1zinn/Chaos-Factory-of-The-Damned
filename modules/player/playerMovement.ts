import InputManager from "../managers/inputManager.ts";
import EventManager from "../managers/eventManager.ts";
import Player from "./player";

export default class Movement {
    player: Player;
    eventManager: EventManager;
    inputManager: InputManager;

    constructor(player: Player, eventManager: EventManager) {
        this.player = player;
        this.eventManager = eventManager;
        this.inputManager = new InputManager()
    }

    handleInput(): void {
        const inputState = this.inputManager.getInputState()
        const { keys, mouse } = inputState
        //console.log(keys)
        //console.log(mouse)
        //keyboard:
        if (keys.w || keys.Space) {
            this.eventManager.emit('jump act', { x: this.player.x, y: this.player.y })
            this.player.jump();
        }
        if (keys.s) {
            this.player.moveDown();
        }
        if (keys.a) {
            this.eventManager.emit('left act', { x: this.player.x, y: this.player.y })
            this.player.moveLeft();
        }
        if (keys.d) {
            this.eventManager.emit('right act', { x: this.player.x, y: this.player.y })
            this.player.moveRight();
        }
        if (!keys.a && !keys.d) {
            this.player.resetVelocity('acc_x')
        }
        if (!keys.w && !keys.s && !keys.Space) {
            this.player.resetVelocity('acc_y')
        }

        //mouse:
        if (mouse.left) {
            this.eventManager.emit('left click', { x: this.player.x, y: this.player.y })
            //this.player.jump()
        }
    }
}
