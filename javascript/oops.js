class Animal {
  // Blueprint of an object
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  logAnimal = () => {
    console.log(this.name);
  };
}

var newAnimal = new Animal("Elephant", "Black", "Mammal");
newAnimal.logAnimal();

class ChildAnimal extends Animal {
  constructor(childname, name, color, type) {
    super(name, color, type);
    this.childname = childname;
  }

  logChildAnimal = () => {
    console.log(`Little ${this.name} is called as ${this.childname}`);
  };
}

var newChild = new ChildAnimal("Cub", "Loin", "Red", "Mammal");
newChild.logChildAnimal();
