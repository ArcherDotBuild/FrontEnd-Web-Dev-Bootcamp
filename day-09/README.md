![image info](./welcome-day-09.png)

<!-- minuto 36 -->

# Welcome to Day 9

## **CSS Grid - Areas. JS Execution Context and Scope Chain**

## Resources:

- Placing items: https://web.dev/learn/css/grid/#placing-items
- Explicit and implicit grid: https://web.dev/learn/css/grid/#negative-line-numbers
- Single line layout using flexbox & grid: https://web.dev/one-line-layouts/
- Scope & Scope chain: https://www.geeksforgeeks.org/explain-scope-and-scope-chain-in-javascript/
- Execution context and hoisting: https://gauravsen.com/hoisting/

### Extra resources:

-

### Roadmap

- 1: grid file 01
- 2: grid areas file 02
- 3: javascript

#### 1. grid

#### 2. grid areas

The `grid-template-areas` property in CSS is used to define a grid layout in a more visual way by assigning names to specific areas of the grid. This makes it easier to position elements within the grid by referencing these named areas, rather than specifying exact row and column positions.

Here's how it works:

- You create a grid with named areas, which are defined as strings. Each string represents a row in the grid, and each word in that string represents a grid cell.
- You use these names to place your grid items into the corresponding areas.

#### 3. javascript

#### lexical environment

A **lexical environment** in JavaScript is a structure holding variable bindings, created during code execution. It consists of the current scope's variables and references to its outer environment.

#### Variable bindings

**Variable bindings** in JavaScript refer to the association between a variable's name and its value, stored within a specific scope, allowing the program to reference and manage the variable efficiently.

#### scope

In JavaScript, **scope** defines the accessibility of variables, determining where they can be used. Variables have a specific context (scope), like global or local, restricting their visibility and lifespan.

#### execution context

In JavaScript, an **execution context** is the environment where code is evaluated and executed. It contains the scope, variable bindings, and the this keyword reference, managing how functions and variables are accessed. Execution contexts are created in two stages:

Creation Phase: JavaScript sets up memory space for variables and functions, creating the scope chain, establishing variable bindings, and initializing this.

Execution Phase: The code runs, values are assigned to variables, and functions are executed.

Execution contexts are either global (default environment) or function-level, and are managed in a stack called the call stack.

#### global execution context

The global execution context in JavaScript is the default environment where code runs initially. It creates the global object, sets up global variables, and forms the outermost scope.

#### this keyword

The **this keyword** in JavaScript refers to the current execution context's object. Its value varies depending on how a function is called, such as global, object, or function contexts.

#### 4. portfolio