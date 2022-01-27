const string = "racecar";

const arr1 = Array.from(string);
const arr2 = arr1.reverse();

const str1 = arr1.join("");
const str2 = arr2.join("");

const result = str1 == str2 ? "Racecar is a palindrome" : "Racecar is not a palindrome";
console.log(result);