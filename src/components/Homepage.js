import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'
import About from './About'
import Skills from './Skills'

function Homepage() {
  return (
    <div>
        <div className='Navbar'> 
            <ul className='Navbar-ul'>
                <a href="#skills" >Skills</a>
                <a href='/projects'><li>Projects</li></a>
                <a href='#about'><li>About</li></a>
            </ul>
        </div>
        <div className='Main-div' >
                <img data-aos="fade-up" data-aos-duration="1000" style={{width:'100px',height:'100px'}} src='https://cdn-icons-png.flaticon.com/256/5046/5046943.png'></img>
               
                <h2 data-aos="fade-up" data-aos-duration="1500">Hi,I'am Arulmozhivarman</h2>
                <h1 data-aos="fade-up" data-aos-duration="2000">
                <span style={{color:'#624E88'}}>Full Stack Web Developer</span> Crafting Dynamic,
                 Scalable, and <br></br>User-Friendly Web Applications
                </h1>
                <h3 data-aos="fade-up" data-aos-duration="2500">
                Expertise in building modern web applications using technologies like JavaScript, React, Node.js, and MySql. I’m passionate about solving complex problems and delivering seamless user experiences.
                </h3>
                <div data-aos="fade-up" data-aos-duration="3000" className='Connect'>
                        <a href='https://www.linkedin.com/feed/'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'></img></a>
                        <a href='/mail'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/270/270798.png'></img></a>
                        <a href='#'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/2530/2530217.png'></img></a>
                        <a href='#'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/15713/15713420.png'></img></a>
                </div>
        </div>
      <div id='skills' data-aos="fade-up" data-aos-duration="1000">
            <Skills/>
      </div>
      <div id='about' style={{color:'gray'}} data-aos="fade-up" data-aos-duration="1000">
            <About />
      </div>

      
    </div>
  )
}

export default Homepage
