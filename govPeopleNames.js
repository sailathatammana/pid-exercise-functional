
const arrayPeople = require('./MOCK_DATA');
// The first name and last name and ip adress of people that have government emails.
function govNames(listOfPeople){
return listOfPeople.filter((x) => x.email.match(/@{1}gov\W|@{1}[a-z0-9]+\Wgov\W|@{1}[a-z0-9]+\Wgov$/)).map((person) => `${person.first_name} ${person.last_name} ${person.ip_address}`);
}
govNames(arrayPeople);

module.exports = govNames;
