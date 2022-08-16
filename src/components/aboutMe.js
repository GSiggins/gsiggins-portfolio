import React from 'react'
import Background from '../img/IMG_0077.JPG'

function AboutMe() {
    return (
        <div style={{  
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          className='about-container about-me'>
           
        <div className="col-10 border rounded text-center text-wrap background-blur-container p-4 light-container-text">
        <h1>About Me</h1>
            <p>
                A Full-Stack Web developer who uses previous experience in paramedic-level emergency medicine to bring a detail-oriented,
                critical-thinking mindset to my coding. Recently earned a certificate from the UCLA Extension Coding Bootcamp, with skills in the MERN stack,
                HTML/CSS, SQL, and OOP.  Known as a problem solver with a knack for JavaScript, my experience coding has ignited a passion for developing concise
                and well documented code with a responsive and aesthetically pleasing UX.  Strong skills in teamwork and communication under challenging conditions
                and deadlines is just some of the skills I bring to a team. I am excited to bring my problem-solving drive to a fast-paced team who provides an intuitive,
                aesthetically pleasing, and UX focused product.
            </p>
        </div>
        </div>
    )
}

export default AboutMe