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
  //im still stuck on this one
  for (let i = 0; i < words.length; i++) {
    // words[i] = nextWord + words[i].substr(1);
    if (words[i] > 1) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      console.log(words[i]);
    }
  }
  return words.join("");
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
    if (menu[i].ingredients.includes(ingredient)) {
      isIngredient = true;
    }
  }

  return isIngredient;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // have not been able to finish this one either
  let duplicateNumberArr = [];

  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = i; i < arr2.length; j++) {
  //       if (arr1[i] === arr2[j]) {
  //         duplicateNumberArr.push(arr1[i]);
  //       }
  //     }
  //   }
  return duplicateNumberArr;
}
