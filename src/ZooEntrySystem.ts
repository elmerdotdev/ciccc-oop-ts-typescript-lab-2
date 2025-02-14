// 🦁 Class Decorator: Zoo Age Restriction
// 🎟️ Implement a class decorator that ensures only guests above a certain age can enter the zoo.
//
// 1. Create a decorator `AgeRestriction(minAge: number)` that modifies the constructor.
// 2. The decorator should throw an error if the guest is below the required age.
// 3. Apply `AgeRestriction(12)` to the `ZooGuest` class.
// 4. Implement a method `enterZoo` in the  that returns a welcome message if entry is allowed.
// 5. Ensure that the class prevents guests under 12 from being instantiated.

function AgeRestriction(minAge: number) {
  return function <T extends { new (...args: any[]): {} }>(target: T, context: ClassDecoratorContext) {
    return class extends target {
      // YOUR CODE HERE
    };
  };
}

@AgeRestriction(12) // Minimum entry age
class ZooGuest {
  name: string;
  age: number;

  constructor(name: string, age: number) {}

  enterZoo() {
    return `🎟️ Welcome to the zoo, ${(this as any).name}! Enjoy your visit.`;
  }
}

// Test cases
const guest1 = new ZooGuest("Alice", 15); // Should allow entry
console.log(guest1.enterZoo()); // "🎟️ Welcome to the zoo, Alice! Enjoy your visit."

const guest2 = new ZooGuest("Bob", 10); // Should throw an error: "🚫 Access Denied: Bob is under 12 and cannot enter the zoo!"