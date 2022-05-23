/////////////////////// Get a Random Float  ///////////////////////

const getRandom = (max = 100, min = 0) => {
    return Math.random() * (max - min) + min;
};

/////////////////////// Get a Random OOB Vector  ///////////////////////

const getRandomOutsidePos = () => {
    let x;
    let y;
    if (getRandom() < 50) {
        x = getRandom() < 50 ? 0 - 100 : canvas.width + 100;
        y = getRandom(0, canvas.height);
    } else {
        x = getRandom(0, canvas.width);
        y = getRandom() < 50 ? 0 - 100 : canvas.height + 100;
    }
    return new Vector(x, y);
};

/////////////////////// Get Distance Between Two Vectors  ///////////////////////

const getDistance = (v1, v2) => {
    return Math.hypot(v1.x - v2.x, v1.y - v2.y);
};
