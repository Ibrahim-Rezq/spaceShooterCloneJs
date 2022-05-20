class controls {
    constructor() {
        this.right;
        this.left;
        this.shoot;
        this.stops;
    }
    setFuncs(right, left, shoot, Stop) {
        this.right = right;
        this.left = left;
        this.shoot = shoot;
        this.stops = Stop;
    }
}
const Controls = new controls();

addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "arrowright" || e.key.toLowerCase() === "d") {
        if (Controls.right !== null && Controls.right !== undefined)
            Controls.right();
    }
    if (e.key.toLowerCase() === "arrowleft" || e.key.toLowerCase() === "a") {
        if (Controls.left !== null && Controls.left !== undefined)
            Controls.left();
    }
    if (e.key.toLowerCase() === " ") {
        if (Controls.shoot !== null && Controls.shoot !== undefined)
            Controls.shoot();
    }
});
addEventListener("keyup", (e) => {
    if (e.key.toLowerCase() === "arrowright" || e.key.toLowerCase() === "d") {
        if (Controls.stops !== null && Controls.stops !== undefined)
            Controls.stops();
    }
    if (e.key.toLowerCase() === "arrowleft" || e.key.toLowerCase() === "a") {
        if (Controls.stops !== null && Controls.stops !== undefined)
            Controls.stops();
    }
});
