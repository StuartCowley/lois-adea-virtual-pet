const MAXIMUM_FITNESS = 10;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype = {
  get isAlive() {
    if (this.fitness <= 0) return false;
    else if (this.hunger >= 10) return false;
    else if (this.age >= 30) return false;
    else return true;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) throw new Error("Your pet is no longer alive :(");

  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function () {
  if (!this.isAlive) throw new Error("Your pet is no longer alive :(");

  const newFitness = this.fitness + 4;
  if (newFitness > MAXIMUM_FITNESS) {
    this.fitness = MAXIMUM_FITNESS;
  } else {
    this.fitness = newFitness;
  }
};

Pet.prototype.feed = function () {
  if (!this.isAlive) throw new Error("Your pet is no longer alive :(");

  const newHunger = this.hunger - 3;
  if (newHunger < 0) {
    this.hunger = 0;
  } else {
    this.hunger = newHunger;
  }
};

Pet.prototype.checkUp = function () {
  if (!this.isAlive) return "Your pet is no longer alive :(";
  else if (this.fitness <= 3 && this.hunger >= 5)
    return "I am hungry AND I need a walk";
  else if (this.fitness <= 3) return "I need a walk";
  else if (this.hunger >= 5) return "I am hungry";
  else return "I feel great!";
};

module.exports = Pet;
