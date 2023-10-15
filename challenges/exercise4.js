export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const object = { 1: 0, 0: 0 };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      object[0] += 1;
    } else if (str[i] === "1") {
      object[1] += 1;
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
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
