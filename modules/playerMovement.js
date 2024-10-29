

export default class Movement {
    constructor(player, eventManager) {
        this.player = player;
        this.eventManager = eventManager;
    }

    handleInput(keys) {
        if (keys.w) {
            this.eventManager.emit('jump act', { "X": `${this.player.x}`, "Y": `${this.player.y}` })
            this.player.jump();
        }
        //if (keys.s) {
        //    this.player.moveDown();
        //}
        if (keys.a) {
            this.eventManager.emit('left act', { "X": `${this.player.x}`, "Y": `${this.player.y}` })
            this.player.moveLeft();
        }
        if (keys.d) {
            this.eventManager.emit('right act', {"X":`${this.player.x}`, "Y":`${this.player.y}`})
            this.player.moveRight();
        }
    }
}
