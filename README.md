# chaos-factory-of-the-damned

A game made with Bun, Vite and JavaScript.

### run the game:

In order to run the game, you must have the Bun runtime, after you havee cloned this repo, run ``` bun install ``` at your terminal to install any dependencies, then run ``` bun run dev ```, Vite will provide the localhost link to open a browser tab with the game running

#### any problem?

If you have incoutered any error/problem while trying to run the game, please consider opening an issue, this helps with the development of the game

### to-do:

- player render (draw) ✅
- correctly apply/implement player movement ✅
- add filter to entityManager so it can separate the objects on different arrays so only necessarie objects will suffer update ✅
- plans on convert to TypeScript if possible ✅🎉
- add physics + colision detector
- polish player movement
- implements gravity and correctly apply it
- implement Events
- add logger/console for depuration

### current errors/difficulties:

- ...
- physics implementation 1: at <a href='./modules/physics/collisions/boundingBall.ts'>boundingBall.ts:45:~to:68:~</a> tied player movement to its hitbox/boundingBall then passed XY to its sprite, however player isnt able to move anymore, must do the opposite (tie movement back to its sprite and pass its XY to hitbox/boundingBall)
- typescript soft-errors (errors that doesn't prevent from the code running without issues, mostly type mismatches), at <a href='./modules//physics/collisions/collisionQuery.ts'>collisionQuery.ts:37:35</a> error says that potentialCollisions mey be null, at <a href='./modules/physics/collisions/quadtrees.ts'>quadtrees.ts:93:19-94:19-95:19-96:19</a> error about not yet disponible (non created) arrays, says "not possible to find array name", at <a href='./modules/tools/spawner.ts'>spawner.ts:40:47</a> error says "argument of type 'string | undefined' can't be atribued to parameter of type 'string'", the cause is the optional argument that is conditionally used.
- for loop at <a href='./modules/physics/collisions/quadtrees.ts'>quadtrees.ts:76:13</a> used for pre-collision detection not working correctly for enemy entity, the for loop dont iters over the player entity which is in the objects array of the quadtree, but for the player entity it works fine.

- box() method of class BoundingBox not providing info correctly at <a href='./modules/physics/collisions/boundingBox.ts'>boundingBox.ts:22:16</a>, which info is captured by itself for isColliding method at <a href='./modules/physics/collisions/collisionQuery.ts'>collisionQuery.ts:30:42</a>, theres no error on console. FIXED
- foreach not working cause an undefined property on <a href='./modules/entityManager.ts'>entityManager.ts:20:57</a>, see a <a href='./to-do media/Captura de tela 2024-10-29 180743.png'>screenshot</a> of the error. FIXED

### tested:

- player not rendering properly:
    one of the causes was the gravity module, which caused the player sprite to vanish, other possibilitie may be the file importing with JavaScript. FIXED