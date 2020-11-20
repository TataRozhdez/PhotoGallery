import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import ImgState from './context/ImgState'

const app = (
  <React.StrictMode>
    <ImgState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ImgState>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))
