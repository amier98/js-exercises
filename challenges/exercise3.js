export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      newArray.push(nums[i]);
    }
  }
  return newArray;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const newArray = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].includes(char)) {
      newArray.push(names[i]);
    }
  }
  return newArray;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(/(^|\W)to($|\W)/)) {
      newArray.push(words[i]);
    }
  }

  return newArray;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let ints = nums.filter(Number.isInteger);

  return ints;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  const newArray = [];
  for (let i = 0; i < users.length; i++) {
    newArray.push(users[i].data.city.displayName);
  }

  return newArray;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here

  const newArray = [];

  for (let i = 0; i < nums.length; i++) {
    let square = Math.sqrt(nums[i]) + Math.sqrt(nums[i].toFixed(2));
    newArray.push(square);
  }

  return newArray;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const newArray = [];

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      newArray.push(sentences[i]);
    }
  }
  return newArray;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const newArray = [];
  let max = 0;
  for (let i = 0; i < triangles.length; i++) {
    newArray.push(Math.max(...triangles[i]));
  }

  return newArray;
}
