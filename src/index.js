module.exports = function reverse(n) {
    const str = Math.abs(n).toString();

    return +str.split("").reverse().join("");
};
