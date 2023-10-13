export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    const sum = nums[i] * nums[i];
    newArray.push(sum);
  }

  return newArray;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  //   const newArray = [];

  //   for (let i = 1; i < words.length; i++) {
  //     const word = words[i].slice(1);
  //     newArray.push(word);
  //     console.log(word);
  //   }
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let count = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].subjects.length === 0) {
      count;
    } else if (people[i].subjects.length === 1) {
      count++;
    } else {
      count += people[i].subjects.length;
    }
  }
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let isIngredient = false;

  for (let i = 0; i < menu.length; i++) {
    console.log(menu[i].ingredients);

    console.log(ingredient);

    if (menu[i].ingredients.includes(ingredient)) {
      isIngredient = true;
    }
  }

  return isIngredient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
