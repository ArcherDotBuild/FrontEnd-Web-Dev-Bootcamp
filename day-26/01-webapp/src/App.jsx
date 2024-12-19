import React, { Component, useState } from 'react'
import './App.css'
import CounterReducer from './CounterReducer'

class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    const { error } = this.state
    if (error) {
      // return (
      //   <div>
      //     <pre>{error.message}</pre>
      //   </div>
      // )
      return <this.props.FallbackComponent error={error} />
    }
    return this.props.children
  }
}

function FallbackComponent({ error }) {
  return (
    <div>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function AppLevelFallbackComponent({ error }) {
  return (
    <div>
      <p>App level</p>
      <pre>{error.message}</pre>
    </div>
  )
}

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={AppLevelFallbackComponent}>
        <CounterReducer />
      </ErrorBoundary>
    </>
  )
}

export default App
