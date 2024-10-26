//import Player from "./modules/player" 

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let CANVAS_WIDTH = canvas.width
let CANVAS_HEIGHT = canvas.height
//comparison, they should output the same value
console.log(CANVAS_WIDTH+" - "+CANVAS_HEIGHT)
console.log(window.innerWidth+" - "+window.innerHeight)

//temp until i move out to a module file
///const spriteSheet = './assets/Transparent/Tilemap/tilemap_packed.png'
const playerImage = new Image()
playerImage.src = './assets/Transparent/Tilemap/tilemap.png';

async function animate() {
    //this clears the canava so it can receive the new frame
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    //if (!gameOn) {return 0}; // the if checks if the game should continue or be stopped

    //the code to run every frame goes here 👇
    //ctx.fillRect(50, 50, 100, 100)
    ctx.drawImage(playerImage, 9, 0, 8, 8, 0, 0, 200, 200)


    //this adjusts the framerate using Bun's sleep function then calls the next frame
    //await Bun.sleep(500); //if set to 1000ms(1 second), this is equivalent to 60fps, if 500ms(0.5 seconds) its 120fps and so on
    requestAnimationFrame(animate); console.log('animate');
}
animate()