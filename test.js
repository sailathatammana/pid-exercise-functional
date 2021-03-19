const totalAge = require('./totalage.js'); // Use the path to your submission file

test('The total age of all people summed', () => {
  expect(totalAge([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(108);
});

const femalesCount = require('./femaleCount.js'); // Use the path to your submission file

test('femalesCount should count correct number of females', () => {
  expect(femalesCount([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(2);
});

const averageAge = require('./averageAge.js'); // Use the path to your submission file

test('Average age of all people', () => {
  expect(averageAge([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
  ])).toBe(36);
});

const firstAndLastNameAbove35 = require('./age35.js'); // Use the path to your submission file

test('Average age of all people', () => {
  expect(firstAndLastNameAbove35([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 39,
    },
  ])).toEqual(['Minne MacGilfoyle', 'Tybie Tille']);
});

const male = require('./namesL.js'); // Use the path to your submission file

test("fullNameOfAllPeopleOver22Under45FirstOrLastWithL should return first and last name of people over 22, under 45 and who's first or last name starts with 'L'", () => {
  expect(male([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
    {
      id: 57, first_name: 'Lonny', last_name: 'Tadd', email: 'ltadd1k@cargocollective.com', gender: 'Male', ip_address: '237.30.28.214', age: 24,
    },
  ])).toEqual(['Lonny Tadd']);
});

const govNames = require('./govPeopleNames.js'); // Use the path to your submission file

test('The first name and last name and ip adress of people that have government emails.', () => {
  expect(govNames([
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.co.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
    {
      id: 8, first_name: 'Purcell', last_name: 'Mearns', email: 'pmearns7@chicagotribune.com', gender: 'Male', ip_address: '60.16.88.134', age: 24,
    },
    {
      id: 10, first_name: 'Tybie', last_name: 'Tille', email: 'ttille9@cargocollective.com', gender: 'Female', ip_address: '82.56.248.7', age: 30,
    },
    {
      id: 57, first_name: 'Lonny', last_name: 'Tadd', email: 'ltadd1k@cargocollective.com', gender: 'Male', ip_address: '237.30.28.214', age: 24,
    },
    {
      id: 7, first_name: 'Minne', last_name: 'MacGilfoyle', email: 'mmacgilfoyle6@amazon.gov.jp', gender: 'Female', ip_address: '12.246.212.112', age: 54,
    },
  ])).toEqual(['Minne MacGilfoyle 12.246.212.112']);
});
