const fibonacci = function(num) {
    num = parseInt(num);

    let previousNum = 0;
    let currentNum = 1;
    let nextNum = previousNum + currentNum;

    if(num < 0) return "OOPS";
    if(num === 0) return 0;

    for(let i = 2; i <= num; i++){
        previousNum = currentNum;
        currentNum = nextNum;
        nextNum = previousNum + currentNum;
    }

    return currentNum;

};

// Do not edit below this line
module.exports = fibonacci;
