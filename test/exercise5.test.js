import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMiltiples", () => {
  test("returns the sum of any numbers that are a multiple of 3 or 5", () => {
    expect(sumMultiples([3, 7, 8, 2, 10, 12])).toBe(25);
  });

  test("returns 0 if there are not any numbers that are multiples of 3 or 5", () => {
    expect(sumMultiples([2, 4, 7, 11, 14])).toBe(0);
  });
});

describe("areWeCovered", () => {
  test("return true if there at least 3 members of staff or more are working on the scheduled day", () => {
    const staff = [
      { name: "amier", rota: ["Monday", "Tuesday", "Thursday"] },
      { name: "John", rota: ["Monday", "Friday"] },
      {
        name: "Gojo",
        rota: ["Monday", "Tuesday", "Wensday", "Thursday", "Friday"],
      },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(true);
  });
  test("return false if there are less than 3 members of staff on the scheduled day", () => {
    const staff = [
      { name: "amier", rota: ["Tuesday", "Thursday", "Friday"] },
      { name: "John", rota: ["Monday", "Friday"] },
      {
        name: "Gojo",
        rota: ["Monday", "Tuesday", "Wensday", "Thursday", "Friday"],
      },
    ];
    expect(areWeCovered(staff, "Monday")).toBe(false);
  });
});

describe("isValidDNA", () => {
  test("return true if its a valid DNA and contains characters C, G, T or A ", () => {
    expect(isValidDNA(["A", "G", "B", "T"])).toBe(true);
  });

  test("return false if DNA is not valid and does not contain C, G, T, A", () => {
    expect(isValidDNA(["K", "L", "E", "P"])).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items ", () => {
    expect(createMatrix(2, "foo")).toEqual(["foo", "foo"]);
  });
});

describe("isItPrime", () => {
  test("return true if it is a prime number", () => {
    expect(isItPrime(23)).toBe(true);
  });
  test("return false if number is not prime number", () => {
    expect(isItPrime(8)).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return complementary DNA string of valid DNA", () => {
    expect(getComplementaryDNA("ACTG")).toEqual("TGAC");
  });
});
