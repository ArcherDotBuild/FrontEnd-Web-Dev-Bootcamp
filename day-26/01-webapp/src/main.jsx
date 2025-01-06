import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoApp from './TodoApp.jsx'
import ContextEx from './ContextEx.jsx'
import Task from './Task.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
    // <TodoApp />
    // <ContextEx />
    <Task />
  // </StrictMode>
)
