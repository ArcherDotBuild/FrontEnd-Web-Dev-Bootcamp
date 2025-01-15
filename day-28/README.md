![image info](./welcome-day-28.png)

# Welcome to Day 28

## **CSS In JS: Emotion. Contacts App using routing & emotion**

## Resources:

- CSS in JS: https://css-tricks.com/a-thorough-analysis-of-css-in-js/
- Emotion: https://emotion.sh/docs/introduction
- Create Browser router: https://reactrouter.com/en/main/routers/create-browser-router
- Loader: https://reactrouter.com/en/main/route/loader

### Extra resources:

-

### Roadmap

- 1: CSS-in-JS
- 2: Why Use Styled-Components or Emotion Over Inline Styles?
- 3:
- 4:

#### 1. CSS-in-JS

CSS-in-JS is a styling approach where CSS is written and managed directly within JavaScript, typically for React applications. It allows you to define styles as JavaScript objects or template literals and apply them dynamically to components.

**Why Use CSS-in-JS?**

1. **Scoped Styles**: Styles are scoped to components, avoiding global CSS conflicts.
2. **Dynamic Styling**: Styles can change based on props or state.
3. **Maintainability**: Combines styles and components for better encapsulation and easier refactoring.
4. **No Separate CSS Files**: All styles stay within the JavaScript file.

**Popular CSS-in-JS Libraries**

1. **Styled-Components**:

   - Example:

```jsx
import styled from 'styled-components'

const Button = styled.button`
  background: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px;
`

function App() {
  return <Button primary>Click Me</Button>
}
```

2. **Emotion**:

   - Example:

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const buttonStyle = css`
  background: blue;
  color: white;
  padding: 10px;
`

function App() {
  return <button css={buttonStyle}>Click Me</button>
}
```

3. **Vanilla Inline Styles**:

   - Example:

```jsx
function App() {
  const style = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
  }

  return <button style={style}>Click Me</button>
}
```

**Key Benefits**

- **Dynamic Styling**: Easily adjust styles based on runtime conditions.
- **Component-Level Isolation**: Prevents unintended style bleed.
- **Enhanced Developer Experience**: Enables reusable, modular, and maintainable styling.

**Considerations**

- Might increase bundle size (depending on the library).
- Can lead to performance concerns in large-scale apps if not optimized.

---

#### 2. Why Use Styled-Components or Emotion Over Inline Styles?

- Inline styles do not support CSS pseudo-classes (:hover, :focus, etc.) or media queries.
- Libraries allow you to write these directly in your components.
- Styling with libraries makes code more readable and maintainable compared to writing raw `style` objects for every element.
- Libraries like Emotion and Styled-Components allow you to define reusable themes or global styles.
