const arrayPeople = require('./MOCK_DATA');

function totalAge (listOfPeople){
  return listOfPeople.reduce((a, o) => a + o.age, 0);    
} 

module.exports = totalAge; 