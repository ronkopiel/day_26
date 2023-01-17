"use strict";

const z = [1, 2, 3, 4, 5];
const doubled = z.map((z) => z * 2);
console.log(doubled);

const ages = [32, 42, 56, 89, 12, 26];
const agesInStrings = ages.map((age) => age.toString());
console.log(agesInStrings);

const capitalize = (str) => {
  const arr = str.split("");
  return arr.map((letter) => letter.toUpperCase()).join("");
};
console.log(capitalize("whoop"));

const employees = [
  { name: "John", age: 25 },
  { name: "Jane", age: 15 },
  { name: "Bob", age: 35 },
];

const employeesNames = employees.map((employ) => employ.name);
console.log(employeesNames);

const multiplyByIndex = (numArray) =>
  numArray.map((num, numIndex) => num * numIndex);
console.log(multiplyByIndex(ages));

const sumForEach = (numArray) => {
  let sum = 0;
  numArray.forEach((num) => (sum += num));
  return sum;
};

console.log(sumForEach(z));

const doubleValues = (numArray) => {
  const doubledArray = [];
  numArray.forEach((num) => doubledArray.push(num * 2));
  return doubledArray;
};
console.log(doubleValues(z));

const removeVowels = (strArray) => {
  const newArray = [];
  strArray.forEach((str) => newArray.push(str.replace(/[aoiueAOIUE]/g, "X")));
  return newArray;
};
const vowelyArray = ["this", "word", "has", "vowels"];
console.log(removeVowels(vowelyArray));

const checkAge = (employeesToCheck) => employeesToCheck.forEach((employ, index) =>  (employ.age< 20) ?  console.log(`The person at index ${index} is too young`): false);
checkAge(employees)

const updateEmployees = (employeesToCheck) => employeesToCheck.forEach(employ => (employ.age > 25)? employ.isAdult = true : employ.isAdult = false);
updateEmployees(employees);
console.log(employees);


const a = [1,2,3,4,5,6,7,8,9]
const onlyEvens = a.filter(num => num%2 == 0)
console.log(onlyEvens);

const fiveAndGreater = (strArray) => strArray.filter(str => str.length > 4);
console.log(fiveAndGreater(vowelyArray));


const clubMembers = [
{ name: "Angelina Jolie", isClubMember: true },
{ name: "Eric Jones", isClubMember: false },
{ name: "Paris Hilton", isClubMember: true },
{ name: "Kayne West", isClubMember: false },
{ name: "Bob Ziroll", isClubMember: true }]

const filterClubMembers = (memberList) => memberList.filter(member => member.isClubMember)
console.log(filterClubMembers(clubMembers));

const array1 = [5, 12, 8, 130, 44]
console.log(array1.find(num => num > 10));

const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]

const findStudent = (studentsList) => studentsList.find(student => student.name == 'Alice')
console.log(findStudent(students));

const olderThan23 = (studentsList) => studentsList.find(student => student.age > 23)
console.log(olderThan23(students));


