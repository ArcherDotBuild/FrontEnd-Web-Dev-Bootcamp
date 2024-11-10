![image info](./welcome-day-15.png)

# Welcome to Day 15

## **Event Loop & Browser Storage**

## Resources:

- Visual representation of the event loop: http://latentflip.com/loupe/
- Local storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- Session storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
- Window.matchMedia: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

### Extra resources:

-

### Roadmap

- 1: event queue
- 2: call stack
- 3: browser storage

#### 1. event queue

The **event queue** in JavaScript is a part of the JavaScript runtime environment that holds asynchronous events and functions that are waiting to be processed. When the call stack (where synchronous code runs) is empty, the event loop takes functions from the event queue and pushes them to the call stack for execution.

Here's a simple breakdown of how it works:

1. **Event Loop:** Constantly checks if the call stack is empty.
2. **Asynchronous Tasks** (like setTimeout, event listeners, fetch requests) complete in the background and, once ready, move their callback functions to the event queue.
3. **Execution:** When the call stack is clear, the event loop picks functions from the event queue to execute, ensuring asynchronous tasks don’t interrupt synchronous code.

This structure allows JavaScript to be non-blocking and handle async operations efficiently, even with a single-threaded model.

#### 2. call stack

The **call stack** in JavaScript is a data structure that keeps track of function calls in the order they need to be executed. It's part of the JavaScript runtime and handles synchronous code execution.

Here's how it works:

1. **Function Call:** When a function is called, it’s added to the top of the stack.
2. **Execution:** JavaScript executes the function at the top of the stack.
3. **Completion:** When a function finishes, it’s removed from the stack, and JavaScript moves to the next function.

If functions call other functions, each one is stacked until the last call completes. When the stack is empty, the event loop can bring in async tasks from the event queue.

#### 3. browser storage

In JavaScript, **browser storage** lets you save data directly in the user’s browser, so it persists even when they navigate between pages or close the browser.

**Types of Browser Storage**

1. **Local Storage:**

- Stores data with no expiration date.
- Data is available across all pages of the site, even after closing the browser.
- Accessed via `localStorage`.
- Example:

```javascript
localStorage.setItem('username', 'Alice') // Save data
const name = localStorage.getItem('username') // Retrieve data
```

2. **Session Storage:**

- Stores data for the duration of the page session (while the browser tab is open).
- Data is cleared when the tab or window is closed.
- Accessed via `sessionStorage`.
- Example:

```javascript
sessionStorage.setItem('sessionId', '12345')
const id = sessionStorage.getItem('sessionId')
```

3. **Cookies:**

- Primarily used for server communication, like tracking login status.
- Can be set to expire after a certain time or kept temporarily.
- Example:

```javascript
document.cookie = 'username=Alice; expires=Fri, 31 Dec 9999 23:59:59 GMT'
```

**Key Points**

- **Local storage** and **session storage** are good for storing simple user preferences and state.
- **Cookies** are typically used for authentication or data sent to the server.
