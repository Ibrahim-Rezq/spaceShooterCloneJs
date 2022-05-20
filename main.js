const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const actor = new Actor({ pos: new Vector(width / 2, height - height / 10) });
let frame = 0;
const projs = [];
moveleft = () => {
    console.log("lefts");
    actor.setAcc(new Vector(1, 0));
};
moveRight = () => {
    actor.setAcc(new Vector(-1, 0));
};
Stop = () => {
    actor.setAcc(new Vector(0, 0));
};
shoot = () => {
    const proj = new Projectile({
        pos: new Vector(actor.pos.x, actor.pos.y),
        maxSpeed: 50,
    });
    proj.setAcc(new Vector(0, -2));
    projs.push(proj);
};
Controls.setFuncs(moveleft, moveRight, shoot, Stop);
const animate = () => {
    requestAnimationFrame(animate);
    context.fillStyle = "rgba(0,0,0,.1)";
    context.fillRect(0, 0, width, height);
    actor.update();
    console.log(projs.length);
    projs.forEach((proj, i) => {
        proj.update();
        if (proj.pos.y < 0) {
            projs.splice(i, 1);
        }
    });
};

animate();
console.log();
