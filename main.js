/////////////////////// Get Canvas & Context  ///////////////////////

const canvas = document.querySelector('.canvas')
const context = canvas.getContext('2d')

/////////////////////// Set Canvas Width  ///////////////////////

const width = (canvas.width = window.innerWidth)
const height = (canvas.height = window.innerHeight)

/////////////////////// Update Arraies  ///////////////////////

const shots = []
const eShots = []
const enemies = []
const particles = []

const enemyShootRate = 0.05 //range from 0.01 to 0.5 max for mormal shoting less is easier
let enemySpeed = 0.1
const enemyDecend = 0.5

let decentNum = 1
let mostLeft
let mostRight

/////////////////////// instintiat Player  ///////////////////////

const player = new Player({
    pos: new Vector(width / 2, height - height / 10),
    color: 'red',
})

/////////////////////// instintiat Enemy  ///////////////////////
const distBetweenEnemy = 50
const enemyLineNum = 5
const offset = 50
const enemyNum = Math.floor((width - width / 3) / offset)
for (let i = 1; i <= enemyLineNum; i++) {
    for (let j = 1; j <= enemyNum; j++) {
        const enemy = new Enemy({
            pos: new Vector(offset + j * 50, i * 50),
            color: '#0a0',
            radius: 10,
        })
        enemy.acc.setX(enemySpeed * decentNum)
        enemies.push(enemy)
    }
}
let frame = 0
/////////////////////// Controls Functions  ///////////////////////

const moveleft = () => {
    player.acc.setX(1)
}
const moveRight = () => {
    player.acc.setX(-1)
}
const Stop = () => {
    player.acc.setX(0)
}
const shoot = () => {
    const shot = new Projectile({
        pos: new Vector(player.pos.x, player.pos.y),
        radius: 3,
        maxSpeed: 50,
    })
    shot.acc.setY(-1)
    shots.push(shot)
}
const eShoot = (pos) => {
    const shot = new Projectile({
        pos: new Vector(pos.x, pos.y),
        radius: 3,
        maxSpeed: 50,
    })
    shot.acc.setY(1)
    eShots.push(shot)
}
Controls.setFuncs(moveleft, moveRight, shoot, Stop)

/////////////////////// Animation  ///////////////////////

const animate = () => {
    requestAnimationFrame(animate)
    context.fillStyle = 'rgba(0,0,0,.2)'
    context.fillRect(0, 0, width, height)
    player.update()

    enemies.reduce((pe, e, i, arr) => {
        if (pe) {
            if (pe.pos.x > e.pos.x) {
                mostLeft = pe
                return pe
            } else {
                mostLeft = e
                return e
            }
        } else {
            mostLeft = e
            return e
        }
    }, enemies[0])
    enemies.reduce((pe, e, i, arr) => {
        if (pe) {
            if (pe.pos.x < e.pos.x) {
                mostRight = pe
                return pe
            } else {
                mostRight = e
                return e
            }
        } else {
            mostRight = e
            return e
        }
    }, enemies[0])
    /////////////////////// Shots Update  ///////////////////////
    eShots.forEach((shot, i, arr) => {
        shot.update()
        if (getDistance(player.pos, shot.pos) < player.radius + shot.radius) {
            /////////////////////// Spawn Particles ///////////////////////

            for (let i = 0; i < 30; i++) {
                particles.push(
                    new Particle({
                        pos: new Vector(shot.pos.x, shot.pos.y),
                        radius: getRandom(5),
                        color: player.color,
                        acc: new Vector(getRandom(-1, 1), getRandom(-1, 1)),
                        maxSpeed: 5,
                        Hscatar: 5,
                    })
                )
            }

            /////////////////////// Remove Enemy & Shot ///////////////////////
            setTimeout(() => {
                arr.splice(arr.indexOf(shot), 1)
                console.log('game ended')
            }, 0)
        }
        if (shot.pos.y > height + 200) {
            setTimeout(() => {
                arr.splice(arr.indexOf(shot), 1)
            }, 0)
        }
    })
    shots.forEach((shot, i, arr) => {
        shot.update()
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
                    )
                }

                /////////////////////// Remove Enemy & Shot ///////////////////////
                setTimeout(() => {
                    eArr.splice(eArr.indexOf(enemy), 1)
                    arr.splice(arr.indexOf(shot), 1)
                }, 0)
            }
        })

        /////////////////////// Shot OOB ///////////////////////

        if (shot.pos.y < -200) {
            setTimeout(() => {
                arr.splice(arr.indexOf(shot), 1)
            }, 0)
        }
    })

    /////////////////////// Enemies Update ///////////////////////

    enemies.forEach((enemy, i, arr) => {
        enemy.update()
        enemy.color = 'green'
        if (mostLeft.pos.getX() > width - offset) {
            enemy.pos.addTo(new Vector(0, enemyDecend))
            enemy.acc.setX(-enemySpeed)
        } else if (mostRight.pos.getX() < offset) {
            enemy.pos.addTo(new Vector(0, enemyDecend))
            enemy.acc.setX(enemySpeed)
        }
        if (getRandom() < enemyShootRate) {
            eShoot(enemy.pos)
        }
    })
    /////////////////////// Particles Update ///////////////////////

    particles.forEach((particle, i, arr) => {
        particle.update()
        if (particle.alpha <= 0.1)
            setTimeout(() => {
                arr.splice(arr.indexOf(particle), 1)
            }, 0)
    })
    if (mostLeft && mostLeft.color) mostLeft.color = 'blue'
    if (mostRight && mostRight.color) mostRight.color = 'cyan'
}

animate()
