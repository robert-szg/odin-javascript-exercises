const sumAll = function(numStart, numFinish) {
    let sum = 0;

    if(typeof numStart !== "number" || typeof numFinish !== "number") return "ERROR";
    if(numStart < 0 || numFinish < 0) return "ERROR"; 
 
    if(numStart > numFinish){
        let auxNum = numStart;
        numStart = numFinish;
        numFinish = auxNum;
    }

    for(let i = numStart; i <= numFinish; i++){
        sum += i;
    }

    return sum;
}; 

// Do not edit below this line
module.exports = sumAll;
