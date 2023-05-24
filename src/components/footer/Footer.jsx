import React from 'react'
import "./footer.css"
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const footer = () => {
  return (
    <footer>
      <h2>MUMIAK</h2>
      <ul className="sectionlinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#experience">My Experience</a></li>
        <li><a href="#services">My Services</a></li>
        <li><a href="#portfolio">My Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer_socials">
        <a href="http://github.com"><AiFillGithub /></a>
        <a href="http://linkedin.com"><AiFillLinkedin /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; 2023 Portfolio | Mumiak</small>
      </div>
    </footer>
  )
}

export default footer