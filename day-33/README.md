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

#### 1. run typescript compiler

`pnpm tsc app.ts`

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
