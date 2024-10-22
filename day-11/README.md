![image info](./welcome-day-11.png)

# Welcome to Day 11

## **Prototype & Modern JS**

## Resources:

- Offset top: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
- Offset height: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight
- Template literal: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- Shorthand property names: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015
- Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- Spread operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- Rest params: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
- Nullish coalescing operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
- Optional chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

### Extra resources:

-

### Roadmap

- 1: Array
- 2: hasOwn()
- 3: class-based constructors and function constructors
- 4: file 03

#### 1. Array

This code snippet adds a custom method called `evenNumbers` to all arrays in JavaScript by modifying `Array.prototype`. Here’s what it does:

```javascript
Array.prototype.evenNumbers = function () {
  return this.filter(function (item) {
    return item % 2 === 0
  })
}
```

**Here’s what it does:**

- `Array.prototype.evenNumbers`: This extends the array object in JavaScript, making the `evenNumbers` method available to any array.
- Inside the method, `this.filter()` is called on the array, which means it will loop through each element of the array and apply the condition provided in the callback function.
- The callback function checks if the element (`item`) is even (`item % 2 === 0`). If the element is even, it is kept in the array, otherwise, it is filtered out.

#### 2. hasOwn()

`Object.hasOwn()` is a method in JavaScript that checks whether an object has a **direct property** (i.e., not inherited from the prototype chain). It returns `true` if the property exists directly on the object, and `false` otherwise.

`Object.hasOwn(object, property)`

- **object**: The object to check.
- **property**: The name or symbol of the property to check for.

**Example:**

```javascript
const obj = {
  name: 'Alice',
  age: 30,
}

console.log(Object.hasOwn(obj, 'name')) // true (because 'name' is a direct property)
console.log(Object.hasOwn(obj, 'toString')) // false (because 'toString' is inherited from the prototype)
```

**Key difference:**
`Object.hasOwn()` is similar to `hasOwnProperty()`, but `Object.hasOwn()` is slightly more modern and is considered more reliable for checking properties directly on objects. It is part of newer JavaScript versions and offers better safety against some prototype issues.

#### 3. class-based constructors and function constructors

In JavaScript, both class-based constructors and function constructors can be used to create objects, but they differ in syntax, usage, and the paradigm they represent. Here’s a breakdown of the theoretical, practical, and functional differences:

**1. Theory:**

- **Function Constructor:**

  - JavaScript is a prototype-based language, meaning it doesn’t have traditional classes like in object-oriented languages (e.g., Java, C++).
  - Before ES6, JavaScript used **function constructors** to simulate classes. These are just functions that are used to initialize objects with specific properties and methods.
  - The prototype of the function constructor is used to share methods across instances.

- **Class-based Constructor:**

  - Introduced in ES6, **class syntax** is syntactic sugar over JavaScript's existing prototype-based inheritance. It doesn’t change how the underlying language works but provides a clearer, more concise way to create objects and handle inheritance.
  - Classes in JavaScript are not true classes like in classical object-oriented programming languages; they still use prototypes under the hood.

**2. Syntax:**

- **Function Constructor:**

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const person1 = new Person('Alice', 30)
person1.greet() // Output: Hello, my name is Alice
```

- **Class-based Constructor:**

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const person1 = new Person('Alice', 30)
person1.greet() // Output: Hello, my name is Alice
```

**3. In Practice:**

- **Function Constructor:**

  - **Before ES6**, function constructors were widely used to create objects that mimic class-based systems.
  - You need to manually attach methods to the prototype for them to be shared across all instances (otherwise, they would be duplicated for every instance).
  - You can’t use the `extends` keyword for inheritance; inheritance has to be managed via setting up prototypes manually.

- **Class-based Constructor:**

  - With **ES6 classes**, creating objects looks more like traditional class-based object-oriented programming, making it easier for developers coming from OOP backgrounds.
  - **Methods are automatically added to the prototype**, so you don’t need to manually attach them like in function constructors.
  - You can use `extends` for class inheritance, making subclassing much cleaner.

**4. Functional Differences:**

- **Function Constructor:**

  - When you create a new instance with a function constructor, JavaScript uses the function as a template to create the object.
  - You need to manage inheritance manually by manipulating prototypes, which can lead to more boilerplate code.

- **Class-based Constructor:**
  - Classes encapsulate the object creation and inheritance more cleanly.
  - JavaScript handles prototype chains automatically with the `extends` keyword.
  - Classes support the concept of **static methods**, which are associated with the class itself rather than any instance.

```javascript
class Person {
  static describe() {
    return 'Person is a human entity'
  }
}

console.log(Person.describe()) // Output: Person is a human entity
```

In a function constructor, you would need to manually set up static-like properties.

**5. Key Differences:**

| **Aspect**                 | **Function Constructor**                                    | **Class-based Constructor**                        |
| -------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| **Syntax**                 | Uses the `function` keyword                                 | Uses the `class` keyword                           |
| **Method Attachment**      | Methods need to be manually added to the prototype          | Methods are automatically added to the prototype   |
| **Inheritance**            | Manual setup of prototype for inheritance                   | Inheritance is more straightforward with `extends` |
| **Static Methods**         | Simulated by attaching to the constructor function directly | Uses the `static` keyword                          |
| **Instance Creation**      | `new` keyword is required (just like class)                 | `new` keyword is required                          |
| **Backward Compatibility** | Older syntax, works in environments before ES6              | Requires ES6 or newer                              |

**6. Performance:**

Functionally, there is no significant performance difference between class-based constructors and function constructors since classes in JavaScript are built on top of its prototype-based inheritance system. Both approaches create similar results under the hood.

**Summary:**

- **Function Constructors** were used before ES6 to create objects and mimic a class-like system in JavaScript. They require manually attaching methods to the prototype and managing inheritance.
- **Class-based Constructors** (introduced in ES6) offer a cleaner and more familiar OOP syntax but still rely on prototypes. They make inheritance, method definitions, and object creation easier and more readable.

Classes are generally preferred in modern JavaScript due to their cleaner syntax and easier inheritance. However, both approaches can be used to create objects, and they are functionally very similar.
