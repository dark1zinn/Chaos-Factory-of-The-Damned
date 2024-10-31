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
- plans on convert to TypeScript if possible
- add physics + colision detector
- polish player movement
- implements gravity and correctly apply it
- implement Events
- add logger/console for depuration

### current errors/difficulties:

- ...
- for loop at <a href='./modules/physics/collisions/quadtrees.js'>quadtrees.js:76:13</a> used for pre-collision detection not working correctly for enemy entity, the for loop dont iters over the player entity which is in the objects array of the quadtree, but for the player entity it works fine.

- box() method of class BoundingBox not providing info correctly at <a href='./modules/physics/collisions/boundingBox.js'>boundingBox.js:22:16</a>, which info is captured by itself for isColliding method at <a href='./modules/physics/collisions/collisionQuery.js'>collisionQuery.js:30:42</a>, theres no error on console. FIXED
- foreach not working cause an undefined property on <a href='./modules/entityManager.js'>entityManager.js:20:57</a>, see a <a href='./to-do media/Captura de tela 2024-10-29 180743.png'>screenshot</a> of the error. FIXED