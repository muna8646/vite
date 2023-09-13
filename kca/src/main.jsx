import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './navbar'
import Home from './home'
import Cos from './Cousers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
    <NavBar/>
    <Home/>
    <route path='./Cousers'Cos/>
    </BrowserRouter>,
)
