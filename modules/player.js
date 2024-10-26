

// spritesheet is whithin ./assets/transparent/tilemap/tilemap_packed.png
const spriteSheet = './assets/Transparent/Tilemap/tilemap_packed.png'
const playerImage = new Image()
playerImage.src = spriteSheet

export default class Player {
    image = playerImage
}
