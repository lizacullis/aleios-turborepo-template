import { Person } from '../../config';
import { jest, describe, it, expect } from '@jest/globals';

describe('Person', () => {
  it('should create a Person instance with correct properties', () => {
    const person = new Person('Alice', 30);
    expect(person.name).toBe('Alice');
    expect(person.age).toBe(30);
  });

  it('should display correct information', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const person = new Person('Bob', 25);
    person.displayInfo();
    expect(consoleSpy).toHaveBeenCalledWith('Name: Bob, Age: 25');
  });

  describe('compareAge', () => {
    it('should determine the older person correctly', () => {
      const alice = new Person('Alice', 30);
      const bob = new Person('Bob', 25);
      const consoleSpy = jest.spyOn(console, 'log');
      Person.compareAge(alice, bob);
      expect(consoleSpy).toHaveBeenCalledWith('Alice is older than Bob');
    });

    it('should determine the younger person correctly', () => {
      const alice = new Person('Alice', 30);
      const bob = new Person('Bob', 35);
      const consoleSpy = jest.spyOn(console, 'log');
      Person.compareAge(alice, bob);
      expect(consoleSpy).toHaveBeenCalledWith('Alice is younger than Bob');
    });

    it('should handle persons of the same age', () => {
      const alice = new Person('Alice', 30);
      const clara = new Person('Clara', 30);
      const consoleSpy = jest.spyOn(console, 'log');
      Person.compareAge(alice, clara);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Alice and Clara are of the same age',
      );
    });
  });
});
