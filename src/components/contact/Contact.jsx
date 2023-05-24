import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'

const contact = () => {
  return (
    <section id="contact">
      <h5>You can reach me through</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>emailaddresh@gmail.com</h5>
            <a href="mailto:emailaddress@gmail.com" target={'_blank'} rel="noreferrer">Send a Message</a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className='contact_option_icon'/>
            <h4>WhatsApp</h4>
            <h5>(254) 000-000000</h5>
            <a href="https://api.whatsapp.com/send?phone=+254000000000" target={'_blank'} rel='noreferrer'>Let's chat</a>
          </article>
        </div>
        <form>
          <input type="text" name="name" placeholder='Enter your name' required/>
          <input type="email" name="email" placeholder='Enter your email' required/>
          <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
          <button type="submit" className='btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact