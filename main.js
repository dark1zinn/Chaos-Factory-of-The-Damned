import Game from './modules/game.js'

const depurer = document.getElementById('depurer')
depurer.style.display = 'none'
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let CANVAS_WIDTH = canvas.width
let CANVAS_HEIGHT = canvas.height

//comparison, they should output the same value
//console.log(CANVAS_WIDTH+" - "+CANVAS_HEIGHT)
//console.log(window.innerWidth+" - "+window.innerHeight)

const game = new Game(canvas)
game.Loop()



