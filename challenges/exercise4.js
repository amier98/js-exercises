export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let nextNum;
  let lastIndex = nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i + 1];
    if (nums[i] === n) {
      nextNum = nextNum || currentElement;
      break;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (lastIndex === n || nums[i] !== n) {
      nextNum = nextNum || null;
    }
  }

  return nextNum;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const object = {};

  for (let i = 0; i < str.length; i++) {
    const currentValue = str[i];
    if (object[currentValue] === undefined) {
      object[currentValue] += 1;
    } else {
      object[currentValue] = 1;
    }
  }
  console.log(object);
  return object;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const number = n.toString();
  const combine = number.split("").reverse().join("");

  return parseFloat(combine);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  let totalSum = 0;

  for (let i = 0; i < arrs.length; i++) {
    if (Array.isArray(arrs[i])) {
      let subArraySum = 0;
      for (let j = 0; j < arrs[i].length; j++) {
        subArraySum += arrs[i][j];
      }
      totalSum += subArraySum;
    }
  }

  return totalSum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  let first = arr[0];

  arr[0] = arr[arr.length - 1];

  arr[arr.length - 1] = first;

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  const check = Object.values(haystack);

  let foundNeedle = false;

  for (let i = 0; i < check.length; i++) {
    //filtering the string properties
    if (
      typeof check[i] === "string" &&
      check[i].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      foundNeedle = true;
    }
  }

  return foundNeedle;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let word = str.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  let wordArray = word.split(" ");
  let wordCounter = {};

  for (var i = 0; i < wordArray.length; i++) {
    if (wordCounter[wordArray[i]]) {
      wordCounter[wordArray[i]] += 1;
    } else {
      wordCounter[wordArray[i]] = 1;
    }
  }
  return wordCounter;
};
