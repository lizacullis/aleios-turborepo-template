export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }

  static compareAge(person1: Person, person2: Person): void {
    if (person1.age > person2.age) {
      console.log(`${person1.name} is older than ${person2.name}`);
    } else if (person1.age < person2.age) {
      console.log(`${person1.name} is younger than ${person2.name}`);
    } else {
      console.log(`${person1.name} and ${person2.name} are of the same age`);
    }
  }
}
