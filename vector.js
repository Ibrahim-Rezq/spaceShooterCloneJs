/////////////////////// Vector Class  ///////////////////////

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.mag;
    }
    /////////////////////// Add Vector (vec) to currnt instance  ///////////////////////
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        this.resetMag();
    }
    /////////////////////// substract Vector (vec) from currnt instance  ///////////////////////
    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        this.resetMag();
    }
    /////////////////////// multiply currnt instance by a value (num)  ///////////////////////
    multi(num) {
        this.x *= num;
        this.y *= num;
        this.resetMag();
    }
    /////////////////////// set the max Length/dirction 'vectors are confusing :'( ' of the Vector  ///////////////////////
    setMag(mag) {
        this.mag = mag;
    }
    /////////////////////// constraint the bounds of currnt instance  ///////////////////////
    resetMag() {
        if (this.x > this.mag) this.x = this.mag;
        if (this.y > this.mag) this.y = this.mag;
        if (this.x < -this.mag) this.x = -this.mag;
        if (this.y < -this.mag) this.y = -this.mag;
    }
}
