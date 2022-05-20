class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag;
    }
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.resetMag();
    }
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.resetMag();
    }
    multi(num) {
        this.x *= num;
        this.y *= num;
        this.resetMag();
    }
    setMag(mag) {
        this.mag = mag;
    }
    resetMag() {
        if (this.x > this.mag) this.x = this.mag;
        if (this.y > this.mag) this.y = this.mag;
        if (this.x < -this.mag) this.x = -this.mag;
        if (this.y < -this.mag) this.y = -this.mag;
    }
}
