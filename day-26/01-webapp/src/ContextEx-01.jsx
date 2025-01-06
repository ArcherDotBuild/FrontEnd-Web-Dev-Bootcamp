import React from 'react'

function Foo({user}) {
  return (
    <>
      <h1>this is Foo</h1>
      <Bar user={user} />
    </>
  )
}

function Bar({user}) {
  return (
    <>
      <h2>this is Bar</h2>
      <Baz user={user} />
    </>
  )
}

function Baz({user}) {
  return <h3>this is Baz, {user}</h3>
}

export default function ContextEx() {
  const username = '@ElfGodd'
  return (
    <div>
      Parent App, say hello {username}
      <Foo user={username} />
    </div>
  )
}
