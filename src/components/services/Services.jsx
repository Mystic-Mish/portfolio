import React from 'react'
import "./services.css"
import { AiOutlineCheck } from 'react-icons/ai'

const services = () => {
  return (
    <section id='services'>
      <h5>What I do</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Content Management System</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Blog / News management</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Business directory / Listings</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Android application</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Portfolio website</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Map integration</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Web hosting</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Testimonials</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Mobile-optimized Website</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Social media integration</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Web Application</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Business cards</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Letter heads</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Logos</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Posters</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Social media graphics</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Email marketing graphics</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Birthday cards</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Invitation cards</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Video Editing</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Photo Editing</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Animation</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Banners</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>UX Design</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>User Research and Analysis</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Customer Journey Mapping</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>UI and Interaction Design</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Mobile first and Responsive design</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Rapid and interactive prototyping</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Wireframe and interactive prototyping</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Customer experience consulting</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>Design Thinking</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list_icon' />
              <p>User Testing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services