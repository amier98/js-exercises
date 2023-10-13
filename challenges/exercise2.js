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

  //   let duplicated_element = [];

  //   console.log(arr1);
  //   console.log(arr2);

  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = i; j < arr2.length; j++) {
  //       if (arr1[i] === arr2[j]) {
  //         duplicated_element.push(arr1[i]);
  //       }
  //     }
  //   }
  //   console.log(duplicated_element);

  //   return duplicated_element;
  // }

  console.log(arr1, arr2);
  let duplicateNumberArr = [];

  for (let num in arr1) {
    for (let num2 in arr2) {
      if (num === num2) {
        continue;
      } else {
        if (arr1[num] === arr2[num2]) {
          duplicateNumberArr.push(arr1[num]);
          duplicateNumberArr.sort();
        }
      }
    }
  }
  console.log(duplicateNumberArr);
  return duplicateNumberArr;
}
