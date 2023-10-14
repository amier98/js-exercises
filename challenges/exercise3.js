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
  // Your code here
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
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
    let square = Math.round(nums[i] * 100) / 100;
    let square2 = Math.sqrt(nums[i]);
    if (nums[i] % 1 !== 0) {
      newArray.push(Number(nums[i]));
    }
  }

  return newArray;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
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
