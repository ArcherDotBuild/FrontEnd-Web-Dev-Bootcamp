![image info](./welcome-day-30.png)

# Welcome to Day 30

## **E-Commerce App(Firebase, RTK, Material UI) - Part 2**

## Resources:

- Redux: https://redux.js.org/tutorials/essentials/part-1-overview-concepts#what-is-redux
- Navigation: https://reactrouter.com/en/main/hooks/use-navigation
- Search Params: https://reactrouter.com/en/main/hooks/use-search-params
- Autocomplete: https://mui.com/material-ui/api/autocomplete/
- Redux Toolkit: https://redux-toolkit.js.org/tutorials/quick-start

### Extra resources:

- Immer: Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way. https://immerjs.github.io/immer/ 

### Roadmap

- 1: Redux
- 2:
- 3:

#### 1. Redux

**What is Redux?**

**Redux is a pattern and library for managing and updating global application state, where the UI triggers events called "actions" to describe what happened, and separate update logic called "reducers" updates the state in response**. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

**Why Should I Use Redux?**

Redux helps you manage "global" state - state that is needed across many parts of your application.

**The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur**. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people
