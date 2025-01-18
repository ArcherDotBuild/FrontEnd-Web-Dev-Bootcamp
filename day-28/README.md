![image info](./welcome-day-28.png)

# Welcome to Day 28

## **CSS In JS: Emotion. Contacts App using routing & emotion**

## Resources:

- CSS in JS: https://css-tricks.com/a-thorough-analysis-of-css-in-js/
- Emotion: https://emotion.sh/docs/introduction
- Create Browser router: https://reactrouter.com/en/main/routers/create-browser-router
- Loader: https://reactrouter.com/en/main/route/loader

### Extra resources:

- https://randomuser.me/: Random User Generator
  A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.

### Roadmap

- 1: CSS-in-JS
- 2: Why Use Styled-Components or Emotion Over Inline Styles?
- 3: useLoaderData React Hook from React Router (v6.4+)

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

#### 3. useLoaderData is a React Hook from React Router (v6.4+)

It is used to retrieve data loaded by a loader function in your route configuration. Here's an explanation of its purpose and usage:

**What is a Loader in React Router?**
A loader is a function you define in your route configuration that runs before rendering a route. Its purpose is to fetch or prepare data required for that route. The data returned by the loader is then made available to the route component using the `useLoaderData` hook.

**What is useLoaderData?**
`useLoaderData` is a hook that allows you to access the data returned by the loader function of the currently matched route. It's the recommended way to handle data fetching in React Router's data layer.

**Why Use useLoaderData?**

- **Centralized data fetching**: Loaders centralize data fetching logic, keeping it outside the components.
- **Automatic handling**: React Router ensures that loaders run when a route is matched, and it passes the data seamlessly to the components via `useLoaderData`.
- **Better UX**: Loaders can delay rendering until the data is fetched, avoiding the "loading flash."
- **Error handling**: Loaders integrate with React Router’s error boundary mechanism.

**Example Usage**

1. **Define a Route with a Loader**

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/users/:id',
    element: <UserProfile />,
    loader: async ({ params }) => {
      // Fetch user data using the route's `id` parameter
      const response = await fetch(`/api/users/${params.id}`)
      if (!response.ok) throw new Response('User not found', { status: 404 })
      return response.json()
    },
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
```

2. **Access the Data in the Component with useLoaderData**

```jsx
import { useLoaderData } from 'react-router-dom'

function UserProfile() {
  const user = useLoaderData() // Access data returned by the loader

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}
```

**Key Points**

1. **Where to Define Loaders:** Loaders are defined in the route configuration.
2. **Automatic Matching:** useLoaderData fetches the data for the currently matched route, so there's no need to pass props manually.
3. **Error Handling:** If a loader throws an error, you can use an error boundary for graceful handling.
4. **Suspense Integration:** React Router automatically suspends rendering until the loader completes (useful with React's Suspense).
