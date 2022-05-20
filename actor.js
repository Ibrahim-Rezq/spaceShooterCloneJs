class Actor {
    constructor({
        pos = new Vector(0, 0),
        acc = new Vector(0, 0),
        radius = 10,
        color = "red",
        maxSpeed = 10,
    }) {
        this.pos = pos;
        this.vel = new Vector(0, 0);
        this.acc = acc;
        this.vel.setMag(maxSpeed);
        this.friction = 0.9;
        this.radius = radius;
        this.color = color;
    }
    update() {
        this.vel.add(this.acc);
        this.vel.multi(this.friction);
        this.pos.add(this.vel);
        this.draw();
    }
    draw() {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }
    setAcc(vec) {
        this.acc.x = vec.x;
        this.acc.y = vec.y;
    }
}
