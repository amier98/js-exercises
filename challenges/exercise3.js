export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter((small) => small < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  //removed for loop and used filter function
  return names.filter((start) => start.includes(char));
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  //removed the for loop here as well
  return words.filter((verb) => verb.match(/(^|\W)to($|\W)/));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  //removed unnecessary variable
  return nums.filter(Number.isInteger);
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map((person) => {
    return person.data.city.displayName;
  });
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map((num) => num % 1 != 0);
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter((senten) =>
    senten.toLowerCase().includes(str.toLowerCase())
  );
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
