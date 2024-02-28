class Key {
  public signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

const key = new Key();
console.log(key);

class Person {
  public key: Key; //  public key: Key = key;  Присвоєння значення key

  constructor() {
    this.key = new Key(); // Ініціалізація у конструкторі
  }

  getKey() {
    console.log(this.key);
  }
}

const person = new Person();
person.getKey();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

export {};
