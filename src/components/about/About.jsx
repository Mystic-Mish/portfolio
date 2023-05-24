import React from 'react'
import "./about.css"
import ME from '../../assets/profile.png'
import { BsAward } from 'react-icons/bs'
import { HiUsers } from 'react-icons/hi'
import { RiFolderOpenLine } from 'react-icons/ri'

const about = () => {
  return (
    <section id='about'>
      <h5>Know more</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className='about_card'>
              <HiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>10 clients</small>
            </article>
            <article className='about_card'>
              <RiFolderOpenLine className='about_icon' />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nulla. Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Culpa pariatur esse blanditiis voluptates vero at laudantium necessitatibus molestias 
            id beatae!</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about