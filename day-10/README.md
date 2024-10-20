![image info](./welcome-day-10.png)

# Welcome to Day 10

## **Object creation, this object, closures, prototypal inheritance**

## Resources:

- Prototypal inheritance: https://javascript.info/prototype-inheritance
- Prototypal inheritance 2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#inheritance_with_the_prototype_chain
- Default params: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
- Object creation: https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
- Closure: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure
- Window object: https://developer.mozilla.org/en-US/docs/Web/API/Window

### Extra resources:

-

### Roadmap

- 1: javascript
- 2: closures file 01
- 3:

#### 1. javascript

In JavaScript, a function is a block of code that performs a specific task, and it can be executed when it's called or invoked. Functions in JavaScript are fundamental to writing clean and modular code.

The term "first-class" in programming languages means that functions in JavaScript are treated like any other variable. This means you can do the following with functions:

**1. Assign them to variables:**

```javascript
const greet = function () {
  console.log('Hello, world!')
}
greet() // Output: Hello, world!
```

**2. Pass them as arguments to other functions::**

```javascript
function sayHello() {
  console.log('Hello')
}

function executeFunction(fn) {
  fn() // Calls the passed function
}

executeFunction(sayHello) // Output: Hello
```

**3. Store them in data structures like arrays or objects:**

```javascript
const functionsArray = [
  function () {
    console.log('Function 1')
  },
  function () {
    console.log('Function 2')
  },
]

functionsArray[0]() // Output: Function 1
```

**4. Return them from other functions:**

```javascript
function createMultiplier(multiplier) {
  return function (num) {
    return num * multiplier
  }
}

const double = createMultiplier(2)
console.log(double(5)) // Output: 10
```

**Example 4 Breakdown:**

Here's a step-by-step explanation of what's happening in this code:

**1. Definition of `createMultiplier`:**

- `createMultiplier` is a function that takes one parameter called `multiplier`.
- This function returns another function (an anonymous function) that takes a parameter called `num` and multiplies it by the `multiplier` value.

**2. Calling `createMultiplier(2)`:**

When you call `createMultiplier(2)`, the function returns a new function that looks like this:

```javascript
function(num) {
    return num * 2;
}
```

- The `multiplier` value of `2` is "captured" by the inner function, meaning that the value `2` is remembered and used whenever the inner function is called.

**3. Storing the returned function in `double`:**

- The result of calling `createMultiplier(2)` is stored in a variable named `double`. Now, `double` is a function that takes one parameter (`num`) and multiplies it by `2`.

**4. Calling `double(5)`:**

- When you call `double(5)`, it executes the function stored in `double`, which was created using the `multiplier` value of `2`. So, it calculates `5 * 2`, which equals `10`.

This technique is possible because of **closures** in JavaScript. A closure is when a function retains access to its outer function's variables even after the outer function has finished executing. In this case, the anonymous function that is returned keeps a reference to the **multiplier** value from **createMultiplier**, allowing it to use that value when it is later called.

These capabilities make JavaScript functions "first-class citizens," which means they can be used just like other values (numbers, strings, objects, etc.). This is a core concept in functional programming and allows for more flexible and expressive code, enabling techniques like callbacks, higher-order functions, and closures.

#### 2. closures
