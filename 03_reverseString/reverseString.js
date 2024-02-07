const reverseString = function(stringInput) {
    let stringArray = stringInput.split("");
    let returnString = '';

    for(let i = (stringInput.length - 1); i > -1; i--){
        returnString += stringArray[i];
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
