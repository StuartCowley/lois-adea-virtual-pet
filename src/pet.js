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

Pet.prototype.checkUp = function () {
  if (this.fitness <= 3 && this.hunger >= 5)
    return "I am hungry AND I need a walk";
  else if (this.fitness <= 3) return "I need a walk";
  else if (this.hunger >= 5) return "I am hungry";
  else return "I feel great!";
};

Pet.prototype.isAlive = function () {
  if (this.fitness <= 0) return "false";
  else if (this.hunger >= 10) return "false";
  else if (this.age >= 30) return "false";
  else return "true";
};
module.exports = Pet;
