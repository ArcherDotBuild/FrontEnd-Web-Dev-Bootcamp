![image info](./welcome-day-31.png)

# Welcome to Day 33

## **Intro to Typescript. Using Typescript with React**

## Resources:

-

### Extra resources:

-

### Roadmap

- 1: run typescript compiler
- 2: typescript configuration file
- 3: types vs interfaces
- 4: Type inference
- 5: Generics

#### 1. run typescript compiler

`pnpm tsc app.ts`
`pnpm tsc`

#### 2. typescript configuration file

`pnpm tsc --init`

#### 3. types vs interfaces

In TypeScript, type and interface are both ways to describe the shape of objects, functions, etc. They’re very similar — but there are some practical differences.

Here’s a **clear table** to see it quickly:

| Feature                | `interface`                                                       | `type`                                                           |
| ---------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| Extend / merge         | Can extend other interfaces & can be merged (declaration merging) | Can extend other types (using intersections) but **can’t** merge |
| Best for               | Object shapes, class contracts                                    | Unions, primitives, function types, tuples                       |
| Declaration merging    | ✅ Yes — two interfaces with the same name combine                | ❌ No — two types with same name cause error                     |
| Unions & intersections | ❌ Can’t do unions directly                                       | ✅ Supports `type A = B \| C` and `type A = B & C`               |
| Implements (classes)   | Classes can `implements InterfaceName`                            | Classes can also `implements TypeName` if it’s an object type    |

⚡ Quick practical tips:

- Use `interface` when describing object shapes or classes — especially if you expect to extend or merge.
- Use `type` when you need unions, intersections, or to alias primitives, tuples, etc.

#### 4. Type inference

Type inference in TypeScript means that the compiler can automatically figure out the type of a variable, function return, or expression without you explicitly writing the type.

Basically, TypeScript looks at how you use a value and guesses its type for you

Examples:
```typescript
// TypeScript infers that 'count' is a number
let count = 5; 
// Equivalent to: let count: number = 5;

// Function return type is inferred as number
function add(a: number, b: number) {
  return a + b; 
  // TypeScript infers: function add(a: number, b: number): number
}

// Inferred as string[]
let fruits = ["apple", "banana"];
```

⚡ Why it matters:

- Saves you from writing extra type annotations.
- Keeps code cleaner while still type-safe.
- If TypeScript can’t infer correctly, you can always declare types manually.

👉 Do you want me to make you a side-by-side table (manual typing vs inference) so it’s super clear when to use each?

#### 5. Generics
Generics in **TypeScript** are a way to create **reusable components** (functions, classes, interfaces) that work with different data types **without losing type safety**.

```typescript
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);   // num: number
let str = identity<string>("hi"); // str: string
```

Here, <T> is a **type placeholder** that gets replaced when you call the function.

In short: **Generics = flexible + strongly typed code**. ✅