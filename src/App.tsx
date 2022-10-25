import React from 'react'
import './App.scss'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (

<BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>

    
  )
}
