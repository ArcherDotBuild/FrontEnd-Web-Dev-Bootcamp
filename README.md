# FrontEnd Bootcamp

### Web development tools

- https://jsonhero.io/ : JSON sucks. But we're making it better.
- https://fakestoreapi.com/docs : Fake Store API Fake store rest API for your e-commerce or shopping website prototype

### Cheatsheet

1.  Git commands
2.  || (logical OR) and ??
3.  prev => !prev
4. 
### 01. Git commands

After running git add ., use this command to see which files are staged:

- View Staged Files Before Committing: `git status`

Alternatively, you can list the staged files (without showing the diff) using:

- List All Staged Files: `git diff --name-only --cached`

This command shows a list of files changed in the most recent commit:

- View the Files in the Last Commit: `git show --name-only`

This option keeps your changes in the staging area, allowing you to re-commit them if needed:

- Undo the Last Commit but Keep the Changes Staged: `git reset --soft HEAD~1`

Undo the Last Commit and Unstage the Changes

- Undo the Last Commit and Unstage the ChangesL: `git reset --mixed HEAD~1`

If .env is already being tracked, .gitignore won’t stop it from being committed. You’ll need to untrack it by running:

- Remove file from Tracking (if it was previously added): `git rm --cached ./path/to/.env`

The standard name for environment files is typically:

- `.env`
- `.env.development`
- `.env.production`
- `.env.test`

---

---

### 02. || (logical OR) and ??

In JavaScript, both `||` (logical OR) and `??` (nullish coalescing) operators can provide a fallback value, but they behave differently in determining when to use the second value.

**1. `||` (Logical OR)**

- Returns the second value if the first value is falsy.
- Falsy values include: `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`.

**Example:**

```javascript
const value = '' || 'Default'
console.log(value) // Output: "Default"
```

- Since `''` is falsy, it returns `"Default"`

---

**2. `??` (Nullish Coalescing)**

- Returns the second value only if the first value is `null` or `undefined`.
- Useful for handling cases where you want to allow falsy values like `0`, `false`, or `''`.

**Example:**

```javascript
const value = '' ?? 'Default'
console.log(value) // Output: ""
```

- Since `''` is neither `null` nor `undefined`, it keeps `''`.

---

**Key Difference:**

- `||` treats all falsy values as needing a fallback.
- `??` only treats `null` or `undefined` as needing a fallback.

---

**Comparison Example:**

```javascript
const a = 0 || 42 // Fallback to 42, since 0 is falsy
console.log(a) // Output: 42

const b = 0 ?? 42 // No fallback, since 0 is not null/undefined
console.log(b) // Output: 0
```

Use `??` when you need more precise handling and want to preserve falsy values like `0` or `false`.

---

---

### 03. prev => !prev

- This is a function that takes the current state (`prev`) as an argument.
- The `!prev` part flips the value of `prev` (i.e., `true` becomes `false`, and `false` becomes `true`).

This is a shorthand for toggling a boolean value.

```javascript
let showHeader = true // Initial state

function toggleHeader() {
  showHeader = !showHeader // Flip the boolean value
  console.log('Header is now:', showHeader ? 'Visible' : 'Hidden')
}

// Simulate toggling the header
toggleHeader() // Logs: Header is now: Hidden
toggleHeader() // Logs: Header is now: Visible
toggleHeader() // Logs: Header is now: Hidden
```

**Explanation:**

- `showHeader` is a simple boolean variable initialized to `true`.
- The `toggleHeader` function toggles the value of `showHeader` using the ! operator.
- Every time `toggleHeader` is called, it flips the value of `showHeader` and logs the updated state.

---

---
