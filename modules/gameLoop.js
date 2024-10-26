import Player from './player';
import Movement from './playerMovement';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = new Player(100, 100);
const movement = new Movement(player);

let keys = {};

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

const gravity = new Gravity([player], 0.5); // Criar uma instância de Gravity

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movement.handleInput(keys);
    player.draw(ctx);
    gravity.update();
    requestAnimationFrame(gameLoop);
}

//gameLoop();