import React, { useState } from 'react'
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
     const [likes, setLikes] = React.useState(0)
     
      function handleClick(){
        setLikes(likes + 1)
      console.log("clicou")
    }
    
    return (

    <div>
      <Header title = "edson"/>
      <Header title = "santana"/>
      <button onClick={handleClick}>like({likes})</button>
    </div>
    
  )
}
export default HomePage;

