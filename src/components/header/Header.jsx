import React from 'react'
import "./header.css"
import Headertwo from './Headertwo'
import Nav from './Nav'

const header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello. Welcome to my website, my name is</h5>
        <h1>JOHN DOE</h1>
        <h2>(NICKNAME)</h2>
        <h5 className="text-light">Web Developer</h5>
        <Headertwo />
        <Nav />
      </div>
    </header>
  )
}

export default header