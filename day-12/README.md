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

## 1. Files Order

- first: promises
- second: currency-converter

## second:

- Curated API Marketplace: https://apilayer.com/
