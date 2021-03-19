const arrayPeople = require('./MOCK_DATA');
// The first name and last name of males that are >22 and <43 name starts with L.

function male(listOfPeople) {
  return listOfPeople.filter((x) => x.gender.includes('Male') && (x.age > 22 && x.age < 43) && (x.first_name[0][0].includes('L') || x.last_name[0][0].includes('L'))).map((person) => `${person.first_name} ${person.last_name}`);
}

male(arrayPeople);

module.exports = male;
