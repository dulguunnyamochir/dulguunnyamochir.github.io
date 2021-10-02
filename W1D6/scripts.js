/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  let isEqual = expected === found;

  if (isEqual) {
    return "TEST SUCCEEDED";
  } else {
    console.assert(
      isEqual,
      "TEST FAILED.  Expected " + expected + " found " + found
    );
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTestForStringArray(expected, found) {
  return (
    Array.isArray(expected) &&
    Array.isArray(found) &&
    expected.length === found.length &&
    expected.every((val, index) => val === found[index])
  );
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  return a > b ? a : b;
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

function isVowel(char) {
  // parameter char must be character
  if (typeof char !== "string" || char.length !== 1) return;

  char = char.toLowerCase();
  return (
    char === "a" || char === "e" || char === "o" || char === "u" || char === "i"
  );
}
console.log(
  "Expected output of isVowel('O') is true  " +
    myFunctionTest(true, isVowel("O"))
);
console.log(
  "Expected output of isVowel('b') is false  " +
    myFunctionTest(false, isVowel("b"))
);

function sum(arr) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.reduce((a, b) => a + b, 0);
}
const arr = [1, 2, 3, 4];
const arr2 = [2, 8, 7, 3, 9, 11];
console.log(
  "Expected output of sum(arr) is 50  " +
    myFunctionTest(50, sum([...arr, ...arr2]))
);

function reverse(str) {
  if (typeof str !== "string") return;

  return str.split("").reverse().join("");
}

console.log(
  "Expected output of reverse('WAP') is PAW  " +
    myFunctionTest("PAW", reverse("WAP"))
);
console.log(
  "Expected output of reverse('Fairfield, Iowa') is 'awoI ,dleifriaF'  " +
    myFunctionTest("awoI ,dleifriaF", reverse("Fairfield, Iowa"))
);

function findLongestWord(arr) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.reduce((a, b) => (a.length > b.length ? a : b)).length;
}

const arrayOfWords = ["one", "two", "three", "four", "five"];
const arrayOfWords2 = [
  "Maharishi",
  "International",
  "University",
  "Fairfield",
  "Iowa",
];

console.log(
  "Expected output of findLongestWord(arr) is 5  " +
    myFunctionTest(5, findLongestWord(arrayOfWords))
);
console.log(
  "Expected output of findLongestWord(arr) is 13  " +
    myFunctionTest(13, findLongestWord(arrayOfWords2))
);

function filterLongWords(arr, i) {
  console.assert(arr.length > 0, "Array should not be null.");

  return arr.filter((el) => el.length > i);
}

console.log(
  "Expected output of filterLongWords(arr) is ['three', 'four', 'five']  " +
    myFunctionTestForStringArray(
      ["three", "four", "five"],
      filterLongWords(arrayOfWords, 3)
    )
);
console.log(
  "Expected output of filterLongWords(arr) is ['International', 'University']  " +
    myFunctionTestForStringArray(
      ["International", "University"],
      filterLongWords(arrayOfWords2, 9)
    )
);

// ----- jsfiddle codes below -----

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
const elm = document.getElementsByClassName("responsive-container")[0];
elm.innerText += 
  "There are JSFiddle results here and previous all function results are in console.";
elm.innerHTML += "<br/>++++++++++++<br/>";
elm.innerText += b.toString();
elm.innerHTML += "<br/>";
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
elm.innerText += c.toString();
elm.innerHTML += "<br/>";
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});
elm.innerText += d;
elm.innerHTML += "<br/>";

const d2 = a.find(function (elem) {
  return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
  return elem > 1;
}); //1

elm.innerText += d2;
elm.innerHTML += "<br/>";
elm.innerText += d3;
elm.innerHTML += "<br/>++++++++++++<br/>";
