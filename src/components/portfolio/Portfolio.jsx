import React from 'react'
import "./portfolio.css"
import IMAGE from '../../assets/ball.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My previous work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_image"><img src={IMAGE} alt="" /></div>
          <h3>Project Name</h3>
          <div className='portfolio_item_button'>
          <a href="https://github.com/" className='btn' target={'_blank'} rel="noreferrer">Github</a>
          <a href="https://github.com/" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image"><img src={IMAGE} alt="" /></div>
          <h3>Project Name</h3>
          <div className='portfolio_item_button'>
          <a href="https://github.com/" className='btn' target={'_blank'} rel="noreferrer">Github</a>
          <a href="http://www.github.com" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item_image"><img src={IMAGE} alt="" /></div>
          <h3>Project Name</h3>
          <div className='portfolio_item_button'>
          <a href="https://github.com/" className='btn' target={'_blank'} rel="noreferrer">Github</a>
          <a href="https://github.com/" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item_image"><img src={IMAGE} alt="" /></div>
          <h3>Project Name</h3>
          <div className='portfolio_item_button'>
          <a href="https://github.com/" className='btn' target={'_blank'} rel="noreferrer">Github</a>
          <a href="https://github.com/" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item_image"><img src={IMAGE} alt="" /></div>
          <h3>Project Name</h3>
          <div className='portfolio_item_button'>
          <a href="https://github.com/" className='btn' target={'_blank'} rel="noreferrer">Github</a>
          <a href="https://github.com/" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
          </div>
        </article><article className='portfolio_item'>
          <div className="portfolio_item_image"><img src={IMAGE} alt="" /></div>
          <h3>Project Name</h3>
          <div className='portfolio_item_button'>
          <a href="https://github.com/" className='btn' target={'_blank'} rel="noreferrer">Github</a>
          <a href="https://github.com/" className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio