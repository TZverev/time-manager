const setRandomColor = () => {
    const randomColor = (min, max) => {
        return min + Math.floor(Math.random() * (max - min + 1))
    };
    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return '#' + componentToHex(randomColor(0, 255)) + componentToHex(randomColor(0, 255)) + componentToHex(randomColor(0, 255))
}

export default setRandomColor;