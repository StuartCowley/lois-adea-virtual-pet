const Pet = require("../src/pet");

describe("Pet", () => {
  test("creates an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Pet);
  });
});
