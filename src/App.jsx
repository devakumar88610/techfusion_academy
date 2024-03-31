import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Router } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>

  )
}

export default App