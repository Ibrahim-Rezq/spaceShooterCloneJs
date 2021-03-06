/////////////////////// Vector Class  ///////////////////////

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag;
    }
    setX(value) {
        this.x = value;
    }

    getX() {
        return this.x;
    }

    setY(value) {
        this.y = value;
    }

    getY() {
        return this.y;
    }

    setAngle(angle) {
        const length = this.getLength();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }

    getAngle() {
        return Math.atan2(this.y, this.x);
    }

    setLength(length) {
        const angle = this.getAngle();
        this.x = Math.cos(angle) * length;
        this.y = Math.sin(angle) * length;
    }

    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    add(v2) {
        return new Vector(this.x + v2.getX(), this.y + v2.getY());
    }

    subtract(v2) {
        return new Vector(this.x - v2.getX(), this.y - v2.getY());
    }

    multiply(val) {
        return new Vector(this.x * val, this.y * val);
    }

    divide(val) {
        return new Vector(this.x / val, this.y / val);
    }

    addTo(v2) {
        this.x += v2.getX();
        this.y += v2.getY();
    }

    subtractFrom(v2) {
        this.x -= v2.getX();
        this.y -= v2.getY();
    }

    multiplyBy(val) {
        this.x *= val;
        this.y *= val;
    }

    divideBy(val) {
        this.x /= val;
        this.y /= val;
    }
    // setMag(mag) {
    //     this.mag = mag;
    // }
    // resetMag() {
    //     if (this.x > this.mag) this.x = this.mag;
    //     if (this.y > this.mag) this.y = this.mag;
    //     if (this.x < -this.mag) this.x = -this.mag;
    //     if (this.y < -this.mag) this.y = -this.mag;
    // }
}
