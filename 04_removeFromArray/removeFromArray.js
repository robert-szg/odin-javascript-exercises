const removeFromArray = function(arrayInput, ...args) {
    let returnArray = [];
    let add = true;

    for(let i = 0; i < arrayInput.length; i++){
        add = true; 

        for(let j = 0; j < args.length; j++){
            if(arrayInput[i] === args[j]){
                add = false;
                break;
            }
        }

        if(add){
            returnArray.push(arrayInput[i]);
        }
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
