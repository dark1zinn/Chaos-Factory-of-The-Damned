import InputManager from "../managers/inputManager";

export default class Movement {
    constructor(player, eventManager) {
        this.player = player;
        this.eventManager = eventManager;
        this.InputManager = new InputManager()
    }

    handleInput() {
        const inputState = this.InputManager.getInputState()
        const { keys, mouse } = inputState
        //console.log(keys)
        //console.log(mouse)
        //keyboard:
        if (keys.w || keys.Space) {
            this.eventManager.emit('jump act', { "X": `${this.player.x}`, "Y": `${this.player.y}` })
            this.player.jump();
        }
        if (keys.s) {
            this.player.moveDown();
        }
        if (keys.a) {
            this.eventManager.emit('left act', { "X": `${this.player.x}`, "Y": `${this.player.y}` })
            this.player.moveLeft();
        }
        if (keys.d) {
            this.eventManager.emit('right act', { "X": `${this.player.x}`, "Y": `${this.player.y}` })
            this.player.moveRight();
        }

        //mouse:
        if (mouse.left) {
            this.eventManager.emit('left click', { "X": `${mouse.x}`, "y": `${mouse.y}` })
            this.player.jump()
        }
    }
}
