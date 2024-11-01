

export default class Renderer {
    fps: number;

    constructor(fps: number) {
        this.fps = fps ? fps : 60;
    }

    render() {
        const duration: number = 1000 / this.fps
        let zero: any = document.timeline.currentTime!;
        requestAnimationFrame(animate);
        function animate(timestamp: number) {
            const value = (timestamp - zero) / duration; // animation-timing-function: linear
            if (value < 1) {
                // code here
                requestAnimationFrame((t) => animate(t));
            } else { /* stuation handling */ }
        }
    }
}