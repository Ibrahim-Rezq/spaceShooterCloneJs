class controls {
    constructor() {
        this.right
        this.left
        this.shoot
        this.stops
        this.lastInput = ''
        this.isShooting = false
    }
    setFuncs(right, left, shoot, Stop) {
        this.right = right
        this.left = left
        this.shoot = shoot
        this.stops = Stop
    }
}
const LEFT = 'LEFT'
const RIGHT = 'RIGHT'
const Controls = new controls()

addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'arrowright' || e.key.toLowerCase() === 'd') {
        if (Controls.right !== null && Controls.right !== undefined) {
            Controls.right()
            Controls.lastInput = RIGHT
        }
    }
    if (e.key.toLowerCase() === 'arrowleft' || e.key.toLowerCase() === 'a') {
        if (Controls.left !== null && Controls.left !== undefined) {
            Controls.left()
            Controls.lastInput = LEFT
        }
    }
    if (e.key.toLowerCase() === ' ') {
        if (
            Controls.shoot !== null &&
            Controls.shoot !== undefined &&
            !Controls.isShooting
        ) {
            Controls.shoot()
            Controls.isShooting = true
            setTimeout(() => {
                Controls.isShooting = false
            }, 300)
        }
    }
})
addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() === 'arrowright' || e.key.toLowerCase() === 'd') {
        if (
            Controls.stops !== null &&
            Controls.stops !== undefined &&
            Controls.lastInput === RIGHT
        )
            Controls.stops()
    }
    if (e.key.toLowerCase() === 'arrowleft' || e.key.toLowerCase() === 'a') {
        if (
            Controls.stops !== null &&
            Controls.stops !== undefined &&
            Controls.lastInput === LEFT
        )
            Controls.stops()
    }
})
