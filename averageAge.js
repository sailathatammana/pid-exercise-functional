const arrayPeople = require('./MOCK_DATA');

function averageAge (listOfPeople){
    const peopleCount = listOfPeople.length;
    return listOfPeople.reduce((a, o) => a + o.age / peopleCount, 0);  
} 

module.exports = averageAge; 