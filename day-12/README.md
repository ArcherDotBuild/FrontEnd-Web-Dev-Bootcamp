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
- 2: hasOwn()
- 3: class-based constructors and function constructors
- 4: ES5
- 5: ES6

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

## 1. Files Order

- first: promises
- second: currency-converter

## second:

- Curated API Marketplace: https://apilayer.com/
