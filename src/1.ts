/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

/////////////////////////////////////////////////////////////

class Students {
  constructor(
    public name: string,
    public age: number,
    public grade: string,
    private status: string
  ) {
  }
}

const student1 = new Students('Yurii', 22, '5', 'ok');

console.log(student1);
console.log(student1.name);
// console.log(student1.status);

export {};
