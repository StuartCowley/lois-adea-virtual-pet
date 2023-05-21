const MAXIMUM_FITNESS = 10;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype.growUp = function () {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  const newFitness = this.fitness + 4;
  if (newFitness > MAXIMUM_FITNESS) {
    this.fitness = MAXIMUM_FITNESS;
  } else {
    this.fitness = newFitness;
  }
};

Pet.prototype.feed = function () {
  const newHunger = this.hunger - 3;
  if (newHunger < 0) {
    this.hunger = 0;
  } else {
    this.hunger = newHunger;
  }
};

module.exports = Pet;
