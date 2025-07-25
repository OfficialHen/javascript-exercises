const findTheOldest = function(obj) {
    const currentYear = new Date().getFullYear()

    return obj.reduce((oldest, person) => {
        const age = (person.yearOfDeath || currentYear) - person.yearOfBirth
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth

        return age > oldestAge ? person : oldest
    })
};

// Do not edit below this line
module.exports = findTheOldest;
