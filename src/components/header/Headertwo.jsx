import React from 'react'
import cv from '../../assets/cv.pdf'

const header = () => {
    return (
        <div className="buttons">
            <a href={cv} download className='btn'>Download my CV</a>
            <a href="#contact" className='btn-primary'>Contact Me</a>
        </div>
    )
}

export default header