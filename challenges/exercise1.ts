export function getFillings(sandwich: any) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  //removed unnecessary variable
  return sandwich.fillings;
}

export function isFromManchester(person: any) {
  if (person === undefined) throw new Error("person is required");
  //removed the unnecessary true and false returns
  return person.city === "Manchester";
}

export function getBusNumbers(people): number {
  if (people === undefined) throw new Error("people is required");
  const buses = Math.ceil(people / 40);
  if (people <= 40) {
    return 1;
  } else if (people <= 80) {
    return 2;
  } else if (people <= 120) {
    return 3;
  } else {
    return buses;
  }
}

export function countSheep(arr): any {
  if (arr === undefined) throw new Error("arr is required");

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "sheep") {
      newArray.push(arr[i]);
    }
  }

  return newArray.length;
}
export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  let isPostcode = true;
  const city = person.address.city;

  if (!city.includes("M")) {
    isPostcode = false;
  }
  if (city.includes("M") && !city.includes("anchester")) {
    isPostcode = false;
  }

  return isPostcode;
}
