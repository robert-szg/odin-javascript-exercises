const findTheOldest = function(peopleArray) {

    let currentYear = new Date().getFullYear();

    peopleArray.map((person) => {
        if(!("yearOfDeath" in person)) person["yearOfDeath"] = currentYear;
    });

    const orderedPeople = peopleArray.sort((firstPerson, secondPerson) => {
        let fp_Age = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        let sp_Age = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        if(fp_Age < sp_Age){
            return 1;
        }
        else return -1;
    });

    return orderedPeople[0];
};

// Do not edit below this line
module.exports = findTheOldest;
