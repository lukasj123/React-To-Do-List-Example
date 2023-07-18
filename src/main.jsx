import React from 'react'
import ReactDOM from 'react-dom/client'
import ToDoList from './ToDoList.jsx'
import App2 from './App2.jsx'
import FancyInput from './RefExample.jsx'
import EffectExample from './EffectExample.jsx'

// import './index.css's

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList />
    <App2 />
    <FancyInput />
    <EffectExample />
  </React.StrictMode>,
)
