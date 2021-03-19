const arrayPeople = require('./MOCK_DATA');

function femalesCount (listOfPeople){
const femalePeople =  listOfPeople.filter((x) => x.gender.includes('Female'));
const femaleCount = femalePeople.length;
return femaleCount;
}

module.exports = femalesCount; 