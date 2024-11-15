![image info](./welcome-day-17.png)

# Welcome to Day 17

## **Day 17 | ES6 Modules, Frontend Tooling - Webpack & Vite**

## Resources:

- Es 6 Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- Intro to web pack: https://flaviocopes.com/webpack/
- Guide: https://webpack.js.org/guides/
- Vite: https://vitejs.dev/guide/

### Extra resources:

-

### Roadmap

- 1: global scope sharing file 01
- 2: module file 02
- 3: export statement in JavaScript

#### 1. global scope sharing

When you include multiple JavaScript files in an HTML file without using export or import, and the files share global variables, it’s often called **"global scope sharing"** or **"namespace pollution"**. This happens because all variables and functions in these files are loaded into the global scope of the browser.

**How It Works:**

1. **Global Variables:** Any variable declared without `let`, `const`, or `var` automatically becomes a global variable, accessible from any file loaded in the HTML.

2. **Order Matters:** The order of `<script>` tags matters because files are loaded sequentially. If one file depends on variables or functions from another, the dependent file must be loaded after the one it depends on.

3. **Risks:** This approach can lead to conflicts if two files use the same variable names, as they’ll overwrite each other in the global scope.

**Example:**

```html
<!-- index.html -->
<script src="file1.js"></script>
<script src="file2.js"></script>
```

In **file1.js**:

```javascript
var sharedVar = "I'm a global variable!"
```

In **file2.js**:

```javascript
console.log(sharedVar) // Outputs: "I'm a global variable!"
```

This method is generally discouraged in modern JavaScript development, as it can make debugging and maintenance difficult due to unexpected interactions between files.

#### 2. module

A **module** in JavaScript is a file containing code (variables, functions, classes, etc.) that can be reused and organized separately from other code. Modules let you split your code into different files, making it easier to manage and reuse.

Modules follow a few main principles:

1. **Encapsulation:** Only the code explicitly marked with export can be used outside the module. Anything not exported remains private to the module.
2. **Imports/Exports:** Modules use import and export statements to share or use code between files.
3. **Scope Isolation:** Each module has its own scope, so variables and functions don’t conflict with others unless they’re explicitly exported and imported.

For example:

math.js

```javascript
export function add(x, y) {
  return x + y
}
export const pi = 3.14
```

main.js

```javascript
import { add, pi } from './math.js'

console.log(add(2, 3)) // 5
console.log(pi) // 3.14
```

Modules help keep code modular, organized, and easy to debug.

#### 3. export statement in JavaScript

The `export` statement in JavaScript lets you share variables, functions, classes, or objects from one module so they can be used in other files.

Here's the basic syntax:

1. **Named Exports:** You can export multiple items by their name.

```javascript
export const myVar = 42
export function myFunction() {
  /*...*/
}
```

2. **Export as You Define:** Export as you declare it.

```javascript
const myVar = 42
function myFunction() {
  /*...*/
}

export { myVar, myFunction }
```

3. **Default Export:** Only one default export per file. It’s useful for exporting a main function or class.

```javascript
export default function myFunction() {
  /*...*/
}
```

To use an exported item in another file, you’ll use `import`.
