/////////////////////// Actor Class  ///////////////////////
/////////////////////// Acts as a sprite like class temporarly  ///////////////////////

class Actor {
    /*
        prams/props is an object with {
            pos -> postion
            acc -> accelration // if object moves
            maxSpeed -> maximum speed // if object moves
            raduis -> radius for circels only // for now
            color -> object color 
        }
    */
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

    /////////////////////// set the accelration of the instance  ///////////////////////
    setAcc(vec) {
        this.acc.x = vec.x;
        this.acc.y = vec.y;
    }
}
/////////////////////// Player Class  ///////////////////////

class Player extends Actor {
    /*
        prams/props is an object with {
            pos -> postion
            acc -> accelration // if object moves
            maxSpeed -> maximum speed // if object moves
            raduis -> radius for circels only // for now
            color -> object color 
        }
    */
    constructor(props) {
        super(props);
    }
    update() {
        super.update();
        if (this.pos.x < width / 10) this.pos.x = width / 10;
        if (this.pos.x > width - width / 10) this.pos.x = width - width / 10;
    }
}
/////////////////////// Projectile Class 'like bullts'  ///////////////////////

class Projectile extends Actor {
    /*
        prams/props is an object with {
            pos -> postion
            acc -> accelration // if object moves
            maxSpeed -> maximum speed // if object moves
            raduis -> radius for circels only // for now
            color -> object color 
        }
    */
    constructor(props) {
        super(props);
    }
}
/////////////////////// Particle Class   ///////////////////////

class Particle extends Actor {
    /*
        prams/props is an object with {
            pos -> postion
            acc -> accelration // if object moves
            maxSpeed -> maximum speed // if object moves
            raduis -> radius for circels only // for now
            color -> object color 
            
            alpha -> the life time of particle
            Hscatar-> the dirction of with the object scater 
                // none = 0 = normal _ 1 = upward _ -1 = Downword
            Vscatar-> the dirction of with the object scater 
                // none = 0 = normal _ 1 = right _ -1 = left
        }
    */
    constructor(props) {
        super(props);
        this.alpha = props.alpha || 1;
        this.Vscatar = props.Vscatar || 0;
        this.Hscatar = props.Hscatar || 0;
    }
    update() {
        super.update();
        this.pos.sub(new Vector(1 * this.Vscatar, 1 * this.Hscatar));
        this.alpha -= 0.03;
    }
    draw() {
        context.save();
        context.globalAlpha = this.alpha;
        super.draw();
        context.restore();
    }
}
