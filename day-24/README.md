![image info](./welcome-day-24.png)

# Welcome to Day 24

## **useRef, Hooks lifecycle and Custom hooks**

## Resources:

- useRef: https://beta.reactjs.org/apis/react/useRef
- Scroll intro view: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
- Hooks flow: https://github.com/donavon/hook-flow
- Custom hooks: https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks
- Custom hooks recipes: https://usehooks.com/

### Extra resources:

```bash
pnpm create vite
pnpm install
pnpm run dev
pnpm dev
```

### Roadmap

- 1: useRef
- 2: pnpm (Performant NPM)
- 2:

#### 1. useRef

In React, `useRef` lets you create a reference to a DOM element or store a mutable value that persists across renders without triggering a re-render.

**Syntax:**

```javascript
const ref = useRef(initialValue)
```

- `ref.current`: Access the current value or element.

**Example: Focusing an input**

```javascript
import React, { useRef } from 'react'

function InputFocus() {
  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus() // Focuses the input
  }

  return (
    <div>
      <input ref={inputRef} placeholder='Type here...' />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default InputFocus
```

Here, clicking the button focuses the input using `useRef`.

#### 2. pnpm (Performant NPM)

pnpm (Performant NPM) is a fast, disk-efficient package manager for JavaScript. It's an alternative to npm and Yarn, designed to handle dependencies more efficiently by using symlinks and a global content-addressable store.

**Key Features:**

- **Efficient Disk Usage:** Instead of duplicating packages, pnpm stores them globally and links them, reducing disk space usage.
- **Fast Installations:** It speeds up installs by avoiding redundancy and using caching.
- **Strict Dependency Management:** Ensures that dependencies are isolated, reducing conflicts and ensuring consistent builds.
- **Monorepo Support:** Excellent for managing multiple projects in a single repository.

**Installation:**

`npm install -g pnpm`

**Basic Commands:**

- **Install dependencies:** `pnpm install`
- **Add a package:** `pnpm add <package-name>`
- **Remove a package:** `pnpm remove <package-name>`

It’s especially useful for large projects or monorepos, improving performance and consistency.
