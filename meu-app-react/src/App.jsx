import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({title}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Meu nome é edson elias</p>
    </div>
  )
}
function HomePage(){
  return (
    <div>
      <Header title = "edson"/>
      <Header title = "santana"/>
    </div>
  )
}
export default HomePage;

