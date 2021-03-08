console.log('Hi there! 🔥');
const shit = '💩',
  fire = '🔥',
  rocket = '🚀',
  poudzo = '👍🏻';

/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum = (num1, num2) => (num1 === num2 ? (num1 + num2) * 3 : num1 + num2);
console.log(sum(2, 2));
console.log(sum(2, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNums = (num1, num2) =>
  num1 === 50 || num2 === 50 || num1 + num2 === 50;

console.log(checkNums(34, 50));
console.log(checkNums(50, 24));
console.log(checkNums(26, 24));
console.log(checkNums(23, 24));
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeChar = (string, position) =>
  string.replace(string.charAt(position), '');

console.log(removeChar('ciao', 0));
console.log(removeChar('ciao', 2));
console.log(removeChar('ciaosonounastringalunga', 4));
/*

4)
 Create a function to find the largest of three given integers.
*/
const largestInt = (num1, num2, num3) =>
  [num1, num2, num3].reduce((acc, cv) => (cv >= acc ? (acc = cv) : acc), 0);
console.log(largestInt(1, 3, 4));
console.log(largestInt(6, 3, 4));
console.log(largestInt(6, 177, 4));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = (num1, num2) => {
  const range1 = [...Array(20)].map((_, idx) =>
    idx === 19 ? idx + 41 : idx + 40
  );
  const range2 = [...Array(30)].map((_, idx) =>
    idx === 29 ? idx + 71 : idx + 70
  );
  if (range1.includes(num1) && range1.includes(num2)) return 'range1[40,60]';
  if (range2.includes(num1) && range2.includes(num2)) return 'range1[70,100]';
  return 'out of ranges';
};
console.log(checkRange(49, 60));
console.log(checkRange(78, 100));
console.log(checkRange(78, 1001));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const repeatString = (string, n) => string.repeat(n);
console.log(repeatString('striveiscool', 8));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const phantomCities = (cityName) =>
  cityName.toLowerCase().startsWith('los') ||
  cityName.toLowerCase().startsWith('new')
    ? cityName
    : '👻';

console.log(phantomCities('chicago'));
console.log(phantomCities('losangeles'));
console.log(phantomCities('angelosles'));
console.log(phantomCities('newyork'));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumArr = (array) => array.reduce((acc, cv) => acc + cv);
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const testArray = (array) => array.some((num) => num === 1 || num === 3);
console.log(testArray([5, 8]));
console.log(testArray([0, 3]));

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
const testArrayAgain = (array) => !array.includes(1) && !array.includes(3);
console.log(testArrayAgain([4, 5]));

// 11)
// Create a function to find the longest string from a given array of strings.
const longestString = (strings) =>
  strings.sort((a, b) => (a.length <= b.length ? -1 : 1))[strings.length - 1];

console.log(longestString(['cia', 'ciao', 'ciaone']));
console.log(longestString(['ciaonebellone', 'ciao', 'ciaone']));
console.log(longestString(['cia', 'ciaotizio', 'ciaone']));
console.log(
  longestString([
    'cia',
    'ciaotizio',
    'soono la stringa+ lunga di tutte 🚀',
    'ciaone',
  ])
);
// 12)
// Create a function to find the types of a given angle.
/* Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */

const findTypeOfAngle = (angle) => {
  switch (true) {
    case angle >= 0 && angle < 90:
      return 'Acute Angle';
    case angle === 90:
      return 'Right angle';
    case angle > 90 && angle < 180:
      return 'btuse angle';
    case angle === 180:
      return 'Stright Angle';
    default:
      return 'unknown angle 🤓';
  }
};
console.log(findTypeOfAngle(56));
console.log(findTypeOfAngle(90));
console.log(findTypeOfAngle(178));
console.log(findTypeOfAngle(180));
console.log(findTypeOfAngle(12345));

// 13)
// Create a function to find the index of the greatest element of a given array of integers
const findIndexOfTheGreatest = (array) =>
  array.reduce(
    (acc, cv, idx) => {
      if (cv >= acc.num) {
        acc.num = cv;
        acc.idx = idx;
      }

      return acc;
    },
    {
      num: 0,
      idx: 0,
    }
  );

console.log(findIndexOfTheGreatest([0, 1, 2, 3, 40, 5, 6, 7, 8, 4, 10]));
// 14)
// Create a function to get the largest even number from an array of integers.
const largestEvenNumber = (numbers) =>
  Math.max(...numbers.filter((num) => num % 2 === 0));

console.log(
  largestEvenNumber([21344343434234, 4564, 756343, 577777777, 100000000000])
);
// 16)
// Create a function to check from two given integers, whether one is positive and another one is negative.
const intChecker = (num1, num2) =>
  (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);

console.log(intChecker(-5, -5));
console.log(intChecker(1, -5));
console.log(intChecker(-1, 5));

// 17)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
const stringMagia = (string) =>
  string.length < 3
    ? string.toUpperCase()
    : string.slice(0, 3).toUpperCase() + string.slice(3);

// 18)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 19)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

/* If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34". */

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
