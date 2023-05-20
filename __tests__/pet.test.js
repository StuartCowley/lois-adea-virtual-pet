const Pet = require("../src/pet");

describe("constructor", () => {
  it("creates an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Pet);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");

    expect(pet.name).toEqual("Fido");
  });
});
