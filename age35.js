const arrayPeople = require('./MOCK_DATA');

 function firstAndLastNameAbove35(listOfPeople) {
  return listOfPeople.filter((x) => x.age > 35)
    .map((person) => `${person.first_name} ${person.last_name}`);
}

firstAndLastNameAbove35(arrayPeople);

/* function firstAndLastNameAbove35(listOfPeople) {
  return listOfPeople.reduce((a, o) => (o.age > 35 && a.push(`${o.first_name} ${o.last_name}`)), []);
}

firstAndLastNameAbove35(arrayPeople); */

/* function fullNameOfAllPeopleOver35(listOfPeople) {
    const peopleOver35 = listOfPeople.filter((person) => person.age > 35);
    return peopleOver35.map(
      (person) => `${person.first_name} ${person.last_name}`,
    );
  }
  console.log(fullNameOfAllPeopleOver35(arrayPeople)); */
 
module.exports = firstAndLastNameAbove35;
