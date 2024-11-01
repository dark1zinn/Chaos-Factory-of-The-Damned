import Game from "../game";


export default class GameManager {
    game: Game;

    constructor(game: Game) {
        this.game = game
    }

    loadSleeper(ms: number) {
        setTimeout(() => { this.game.loading = false; console.log('timer done') }, ms);
    }
}