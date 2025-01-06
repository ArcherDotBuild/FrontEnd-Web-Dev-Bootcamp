import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)
const ThemeContext = createContext('dark')

function Foo({ user }) {
  return (
    <>
      {/* <ThemeContext.Provider value='light'> */}
        <h1>this is Foo</h1>
        <Bar user={user} />
      {/* </ThemeContext.Provider> */}
    </>
  )
}

function Bar({ user }) {
  return (
    <>
      <UserContext.Provider value={'Alberto'}>
        <h2>this is Bar</h2>
        <Baz user={user} />
      </UserContext.Provider>
    </>
  )
}

function Baz({ user }) {
  const username = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <>
      <h3
        style={{
          background: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >
        this is Baz, user: {user}
      </h3>
      <h3>this is Baz, username: {username}</h3>
    </>
  )
}

export default function ContextEx() {
  const username = '@ElfGodd'
  const [theme, setTheme] = useState('light')
  return (
    <div>
      Parent App, say hello {username}
      <UserContext.Provider value={username}>
        <ThemeContext.Provider value={theme}>
          <Foo user={username} />
        </ThemeContext.Provider>
      </UserContext.Provider>
      <button
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        Toggle theme
      </button>
    </div>
  )
}
