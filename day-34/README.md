![image info](./welcome-day-34.png)

# Welcome to Day 34

## **Netflix Clone**

## Resources:

-

### Extra resources:

-

### Roadmap

- 1: run typescript compiler

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

#### 6. Literal types

In **TypeScript, literal types** are types that represent **exact** values rather than general types.

```typescript
let direction: "north" | "south" | "east" | "west";
direction = "north";   // ✅
direction = "up";      // ❌ Error
```

Here `"north", "south", "east", "west"` are **string literal types**.

They also work with **numbers** and **booleans**:

```typescript
let answer: true;  
answer = true;   // ✅
answer = false;  // ❌ Error
```

👉 In short: **Literal types let you restrict a variable to specific, exact values**.

```typescript
// With a type alias (using `type`)
type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east"; // ✅
direction = "up";                  // ❌ Error
```

`type` is only needed when you want a **named type alias**.
You can use literal types **inline** or via a **type alias**:

#### 7. keyof operator

The `keyof` operator in TypeScript is used to get a union type of all the keys (property names) of a given object type.

```typescript
type Person = {
  name: string;
  age: number;
  alive: boolean;
};

type PersonKeys = keyof Person;
// "name" | "age" | "alive"
```
So `PersonKeys` is literally the union of the keys `"name" | "age" | "alive"`.

```typescript
type Person = {
  name: string;
  age: number;
  alive: boolean;
};

type PersonKeys = keyof Person;
// "name" | "age" | "alive"
```
<br>
<hr>

**Practical use:**

```typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Ana", age: 25, alive: true };

let age = getValue(person, "age");     // number
let name = getValue(person, "name");   // string
```

👉 In short: `keyof` **extracts the keys of a type as a union, useful for making type-safe utilities.**

#### 8. typeof operator

- `typeof` in TypeScript lets you **capture the type of a value/variable.**

- It’s different from JavaScript’s runtime `typeof` (which gives a string like `"string"`, `"number"`).

- In TypeScript, it’s a **type query operator**.

```typescript
const person = {
  name: "Ana",
  age: 25,
  alive: true,
};

type PersonType = typeof person;
// {
//   name: string;
//   age: number;
//   alive: boolean;
// }
```
<br>
<hr>
<br>

🔹 Using `keyof` with `typeof`

You often combine them:

```typescript
const person = {
  name: "Ana",
  age: 25,
  alive: true,
};

type PersonKeys = keyof typeof person;
// "name" | "age" | "alive"
```

So now, instead of manually writing `"name" | "age" | "alive"`, TypeScript infers it automatically.

<hr>

🔹 Practical Example

```typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const car = { brand: "Toyota", year: 2020 };

type CarKeys = keyof typeof car; 
// "brand" | "year"

let key: CarKeys = "brand"; // ✅ type-safe
getValue(car, key);         // returns string
```
👉 **In short**:

- `typeof` → turns a value into its type.

- `keyof` → extracts the keys of a type as a union.

- Together → let you build **type-safe functions** that adapt to the structure of objects.