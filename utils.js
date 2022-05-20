const getRandom = (max = 100, min = 0) => {
    return Math.random() * (max - min) + min;
};

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
