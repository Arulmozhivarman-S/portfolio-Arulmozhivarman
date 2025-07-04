import React from 'react'
import "./Homepage.css"
import { Link } from 'react-router-dom'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function Homepage() {
  return (
    <div>
        <div className='Navbar'> 
            <ul className='Navbar-ul'>
                <a href="#skills" >Skills</a>
                <a href='#project'><li>Projects</li></a>
                <a href='#about'><li>About</li></a>
            </ul>
        </div>
        <div className='Main-div' >
                <img data-aos="fade-up" data-aos-duration="1000" style={{width:'100px',height:'100px'}} src='https://cdn-icons-png.flaticon.com/256/5046/5046943.png'></img>
               
                <h1 data-aos="fade-up" data-aos-duration="1500">Hi,I'am Arulmozhivarman S</h1>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                <span style={{color:'#624E88'}}>Software Developer</span> Crafting Dynamic,
                 Scalable, and <br></br>User-Friendly Web Applications and cool ML models
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="2500">
                Expertise in building modern web applications using technologies like JavaScript, React, Springboot, and MySql. I’m passionate about solving complex problems and delivering seamless user experiences.
                </h3>
                <div data-aos="fade-up" data-aos-duration="3000" className='Connect'>
                        <a href='https://www.linkedin.com/feed/'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'></img></a>
                        <a href='https://github.com/Arulmozhivarman-S'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/270/270798.png'></img></a>
                        <a href='mailto:arul150105@gmail.com'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/2530/2530217.png'></img></a>
                        <a href='https://www.instagram.com/arul__14/'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/15713/15713420.png'></img></a>
                </div>
        </div>
      <div id='skills' data-aos="fade-up" data-aos-duration="1000">
            <Skills/>
      </div>
      <div id='project' data-aos="fade-up"  >
          <Projects/>
      </div>
      <div id='about' style={{color:'gray'}} data-aos="fade-up" data-aos-duration="1000">
            <About />
      </div>
      
    </div>
  )
}

export default Homepage
