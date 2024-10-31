

export default class InputManager {
    constructor() {
        this.keys = {};
        this.mouse = { x: 0, y: 0, left: false, right: false };

        // Event listeners for keyboard
        document.addEventListener('keydown', (event) => {
            if (event.key === ' ') { this.keys[event.code] = true; return }
            this.keys[event.key] = true;
        });
        document.addEventListener('keyup', (event) => {
            if (event.key === ' ') { this.keys[event.code] = false; return }
            this.keys[event.key] = false;
        });

        // Event listeners for mouse
        document.addEventListener('mousemove', (event) => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
        });
        document.addEventListener('mousedown', (event) => {
            if (event.button === 0) {
                this.mouse.left = true;
            } else if (event.button === 2) {
                this.mouse.right = true;
            }
        });
        document.addEventListener('mouseup', (event) => {
            if (event.button === 0) {
                this.mouse.left = false;
            } else if (event.button === 2) {
                this.mouse.right = false;
            }
        });
    }

    // Method to get the current input state
    getInputState() {
        return {
            keys: this.keys,
            mouse: this.mouse,
        };
    }
}
