import React from 'react'
import './App.css'
import Footer from './Footer'
import Navigation from './Navigation'
import LogoList from './LogoList'
import Image from './Image'

function App() {
  return (
    <div className = 'App'>
    <Navigation/>
    <Image/>
    <LogoList/>
    <Footer/>
    </div>
  );
}

export default App;


