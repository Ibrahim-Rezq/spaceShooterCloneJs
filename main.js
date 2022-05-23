/////////////////////// Get Canvas & Context  ///////////////////////

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

/////////////////////// Set Canvas Width  ///////////////////////

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

/////////////////////// Update Arraies  ///////////////////////

const shots = [];
const enemies = [];
const particles = [];

/////////////////////// instintiat Player  ///////////////////////

const player = new Player({ pos: new Vector(width / 2, height - height / 10) });

/////////////////////// instintiat Enemy  ///////////////////////
const distBetweenEnemy = 50;
const enemyNum = 100;
const enemyLineNum = 20;
const offset = width / 20;
let row = 0;
for (let i = 0; i < enemyNum; i++) {
    if (i % enemyLineNum == 0 && i !== 0) row++;
    const enemy = new Player({
        pos: new Vector(offset * (i - enemyLineNum * row), offset * (row + 1)),
        color: "#0a0",
    });
    enemies.push(enemy);
}
let frame = 0;

/////////////////////// Controls Functions  ///////////////////////

const moveleft = () => {
    player.setAcc(new Vector(1, 0));
};
const moveRight = () => {
    player.setAcc(new Vector(-1, 0));
};
const Stop = () => {
    player.setAcc(new Vector(0, 0));
};
const shoot = () => {
    const shot = new Projectile({
        pos: new Vector(player.pos.x, player.pos.y),
        maxSpeed: 50,
    });
    shot.setAcc(new Vector(0, -2));
    shots.push(shot);
};
Controls.setFuncs(moveleft, moveRight, shoot, Stop);

/////////////////////// Animation  ///////////////////////

const animate = () => {
    requestAnimationFrame(animate);
    context.fillStyle = "rgba(0,0,0,.2)";
    context.fillRect(0, 0, width, height);
    player.update();

    /////////////////////// Shots Update  ///////////////////////

    shots.forEach((shot, i, arr) => {
        shot.update();
        enemies.forEach((enemy, eI, eArr) => {
            /////////////////////// On Ememy Contact  ///////////////////////

            if (getDistance(enemy.pos, shot.pos) < enemy.radius + shot.radius) {
                /////////////////////// Spawn Particles ///////////////////////

                for (let i = 0; i < 30; i++) {
                    particles.push(
                        new Particle({
                            pos: new Vector(shot.pos.x, shot.pos.y),
                            radius: getRandom(5),
                            color: enemy.color,
                            acc: new Vector(getRandom(-1, 1), getRandom(-1, 1)),
                            maxSpeed: 5,
                            Hscatar: 5,
                        })
                    );
                }

                /////////////////////// Remove Enemy & Shot ///////////////////////

                setTimeout(() => {
                    arr.splice(arr.indexOf(shot), 1);
                    eArr.splice(eArr.indexOf(enemy), 1);
                }, 0);
            }
        });

        /////////////////////// Shot OOB ///////////////////////

        if (shot.pos.y < 0) {
            setTimeout(() => {
                arr.splice(arr.indexOf(shot), 1);
            }, 0);
        }
    });

    /////////////////////// Enemies Update ///////////////////////

    enemies.forEach((enemy, i) => {
        enemy.update();
    });

    /////////////////////// Particles Update ///////////////////////

    particles.forEach((particle, i, arr) => {
        particle.update();
        if (particle.alpha <= 0.1)
            setTimeout(() => {
                arr.splice(arr.indexOf(particle), 1);
            }, 0);
    });
};

animate();
