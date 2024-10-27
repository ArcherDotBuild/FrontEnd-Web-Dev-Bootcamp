![image info](./welcome-day-12.png)

# Welcome to Day 12

## **Promises, Async/Await**

## Resources:

- Enumerability: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
- Object.defineProperty: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- Intro to promises: https://web.dev/promises/
- Promise methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#constructor
- Resolve Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
- Reject Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
- JSON: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
- Fetch api: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- Try Catch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
- Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
- Maps: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
- Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

### Extra resources:

-

### Roadmap

- 1: Promises
- 2: Async/Await in JavaScript
- 3: Synchronous vs. Asynchronous Programming
- 4: Set
- 5: Maps

#### 1. Promises

**Understanding JavaScript Promises: A Basic Example**

**What is a Promise?**
In JavaScript, a promise represents the eventual completion (or failure) of an asynchronous operation. It's a way to handle asynchronous tasks in a more structured and manageable way compared to traditional callbacks.

**Basic Structure: JavaScript**

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (condition) {
    resolve(result) // Resolve the promise with a value
  } else {
    reject(error) // Reject the promise with an error
  }
})
```

**Example: Fetching Data from an API**

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.example.com/data')

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error('Failed to fetch data'))
      }
    }

    xhr.onerror = () => {
      reject(new Error('Network error'))
    }

    xhr.send()
  })
}

fetchData()
  .then((data) => {
    console.log('Data:', data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })
```

**Explanation:**

1. **Create a Promise:** The `fetchData` function returns a new Promise.
2. **Asynchronous Operation:** Inside the Promise constructor, an asynchronous operation (in this case, an HTTP request using `XMLHttpRequest`) is performed.
3. **Resolve or Reject:**
   - If the request is successful (status code 200), the Promise is resolved with the parsed data.
   - If there's an error, the Promise is rejected with an error message.
4. **Chaining Promises:**
   - The `then` method is used to handle the resolved value of the Promise.
   - The `catch` method is used to handle rejected Promises.

**Key Points:**

- Promises provide a cleaner way to handle asynchronous operations compared to callbacks.
- They allow for chaining multiple Promises together using then and catch.
- Rejected Promises can be caught and handled to prevent errors from crashing your application.

By understanding and utilizing Promises, you can write more robust and maintainable JavaScript code for asynchronous tasks.

---

When you create a new promise using `new Promise((resolve, reject) => { ... })`, you are **defining the behavior** for when something asynchronous happens, like waiting for a timer or a network request. Inside this promise, you use either `resolve()` to signal that the operation was successful, or `reject()` to signal that it failed.

However, at that point, you're only **defining** what the promise will do (either resolve or reject) after the asynchronous task. You aren't yet telling the code what to do once the promise is resolved or rejected.

**Why Use `.then()` and `.catch()`?**

- `.then()` is used to specify what should happen **after** the promise is resolved. This is where you handle the result of the promise (e.g., when you get your money back).
- `.catch()` is used to handle what should happen if the promise is **rejected** (if there's an error or something goes wrong).

**Why not handle everything inside `resolve` and `reject`?**

- Inside the `resolve` and `reject` calls, you are just controlling the outcome of the asynchronous operation, not what should happen afterward.
- By using `.then()` and `.catch()`, you're **separating concerns**:
  - **The promise itself** just cares about whether it resolves or rejects.
  - **The code that uses the promise** (via `.then()` and `.catch()`) handles what happens next.

**Example in your code:**
In your `promiseOne`, you're telling the promise what to do in the future:

- In `resolve(10_000)`: You're saying, "This is a successful outcome."
- In `reject(new Error("I lied..."))`: You're saying, "This is a failure."

But only when you chain `.then()` or `.catch()` are you specifying how your code should respond to that success or failure.

**In Summary:**

- **resolve()** or **reject()** decides the outcome of the promise.
- **.then()** and **.catch()** specify what happens next depending on whether the promise was resolved or rejected.
  This allows for cleaner and more modular code by separating the creation of the promise from the handling of its results.

#### 2. Async/Await in JavaScript

**Async/Await in JavaScript:**
`async` and `await` provide a way to write asynchronous code that looks and behaves like synchronous code. An `async` function always returns a promise, and `await` pauses execution until the promise resolves.

**Async/Await vs. Promises:**
Async/await is built on promises, making it easier to handle promises in a cleaner, more readable way. It simplifies chaining `.then()` and `.catch()` calls by allowing asynchronous code to flow more naturally, as if it were synchronous.

```javascript
async function greet() {
  return 'Hello, baby!'
}

async function sayHello() {
  const message = await greet() // Wait for "greet" to finish
  console.log(message) // Then print it
}

sayHello() // Output: "Hello, baby!"
```

**Explanation:**

- `greet` is an async function that returns "Hello, baby!".
- `sayHello` waits (`await`) for `greet` to finish, then prints the message.
- This makes async code look like normal, step-by-step code!

#### 3. Synchronous vs. Asynchronous Programming

**Synchronous Programming in JavaScript:**
Synchronous programming in JavaScript executes code line by line, blocking the next line until the current line finishes. This approach can slow down applications when performing long-running tasks, like network requests.

**Asynchronous Programming in JavaScript:**
Asynchronous programming allows JavaScript to start tasks and continue running other code while waiting for those tasks to complete. Techniques like callbacks, promises, and async/await handle operations like network calls without blocking execution.

**Comparing Synchronous vs. Asynchronous Programming:**
Synchronous code runs sequentially, blocking the next task until the current one finishes. Asynchronous code runs tasks independently, allowing JavaScript to handle multiple tasks more efficiently, improving performance and user experience.

#### 4. Set

In JavaScript, a `Set` is a collection of unique values, created using `new Set()`. It automatically removes duplicates, making it useful for storing items without repeats. Sets support methods like `.add()`, `.delete()`, and `.has()` for easy management.

#### 5. Maps

A Map in JavaScript, created with `new Map()`, is a collection of key-value pairs where both keys and values can be of any type. It preserves insertion order and provides methods like .`set()`, `.get()`, .`delete()`, and `.has()` for efficient data management.

**Comparing `Map` vs. JavaScript Object**

- **Structure:** A `Map` is similar to an object because both store key-value pairs. But `Map` offers extra functionality and flexibility.

- **Keys:** In an object, keys are always strings or symbols. A `Map`, however, allows any data type as a key—strings, objects, even functions.

- **Order:** `Map` maintains the order of items, making it useful when you need to keep a strict sequence of entries. Objects do not guarantee key order.

- **Size:** `Map` has a `.size` property to get the total number of entries easily, while for an object, you’d have to use `Object.keys(obj).length`.

- **Performance:** Map can be faster for frequent addition and deletion of entries, especially with larger datasets, while objects are often slightly faster for smaller collections.

**When to Use:**

- Use `Map` when you need non-string keys, ordered data, or if you’ll frequently add/remove entries.
- Use **Object** for simpler structures, like fixed sets of data or where you only need string keys.

**Comparing Map vs. JSON**
JSON is a data format, while `Map` and objects are JavaScript data structures.

- **Purpose:** JSON (JavaScript Object Notation) is primarily for **data transfer**—it serializes data to a text format that can be easily read or shared across systems. `Map`, however, is designed to be a live data structure in JavaScript code.

- **Conversion:** To use JSON with a `Map`, you’d need to convert `Map` to an object or array structure, since JSON only supports basic data types like arrays and objects.

**Summary**

- **Map:** Best for dynamic data with non-string keys or ordering requirements.
- **Object:** Best for static or structured data with string keys.
- **JSON:** Best for data transfer between applications, APIs, or storing in a text-based format.
