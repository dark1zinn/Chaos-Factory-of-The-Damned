import Game from './modules/game.ts'

const depurer: HTMLDivElement = document.querySelector<HTMLDivElement>('#depurer')!
depurer.style.display = 'none'
const canvas: HTMLCanvasElement = document.querySelector<HTMLCanvasElement>('#canvas1')!
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
canvas.width = window.innerWidth
canvas.height = window.innerHeight
/* let CANVAS_WIDTH = canvas.width
let CANVAS_HEIGHT = canvas.height */

//comparison, they should output the same value
//console.log(CANVAS_WIDTH+" - "+CANVAS_HEIGHT)
//console.log(window.innerWidth+" - "+window.innerHeight)

const game = new Game(canvas)
game.Loop()



