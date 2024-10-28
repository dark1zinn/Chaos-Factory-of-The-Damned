

export default class Movement {
    constructor(player) {
        this.player = player;
    }

    handleInput(keys) {
        if (keys.up) {
            this.player.jump();
        }
        if (keys.down) {
            this.player.moveDown();
        }
        if (keys.left) {
            this.player.moveLeft();
        }
        if (keys.right) {
            this.player.moveRight();
        }
    }
}
