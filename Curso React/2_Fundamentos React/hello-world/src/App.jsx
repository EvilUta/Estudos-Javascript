import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/templateExpressions'
import MyComponent from './components/myComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  return (
    <>
    <div className="App">
      <h1 style={{color: "red"}} >Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
      </div>
    </>
  )
}

export default App
