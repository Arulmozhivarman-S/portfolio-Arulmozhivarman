import React from 'react'
import "./Homepage.css"
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function Homepage() {
  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  return (
    <div id="top">
        <Navbar />

        <div className='Main-div' >
                <img data-aos="fade-up" data-aos-duration="1000" style={{width:'100px',height:'100px'}} src='https://cdn-icons-png.flaticon.com/256/5046/5046943.png' alt = ""></img>

                <h1 data-aos="fade-up" data-aos-duration="1500">Hi, I'm Arulmozhivarman S</h1>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                <span style={{color:'#a78bca'}}>Software Developer</span> Crafting Dynamic,
                 Scalable, and <br></br>User-Friendly Web Applications and cool ML models
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="2500">
                Expertise in building modern web applications using technologies like JavaScript, React, Springboot, and MySql. I'm passionate about solving complex problems and delivering seamless user experiences.
                </h3>

                <div data-aos="fade-up" data-aos-duration="2800" className='Hero-cta'>
                    <a className='Hero-resume' href={resumeUrl} target='_blank' rel='noopener noreferrer'>View Resume</a>
                    <a className='Hero-ghost' href='#project' onClick={(e)=>{e.preventDefault(); const el=document.getElementById('project'); if(el) el.scrollIntoView({behavior:'smooth'});}}>See Projects</a>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className='Connect'>
                        <a href='https://www.linkedin.com/in/arulmozhivarman-s' target='_blank' rel='noopener noreferrer'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' alt = ""></img></a>
                        <a href='https://github.com/Arulmozhivarman-S' target='_blank' rel='noopener noreferrer'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/270/270798.png' alt = ""></img></a>
                        <a href='mailto:arul150105@gmail.com'><img style={{width:'30px',height:'30px'}} src='https://cdn-icons-png.flaticon.com/128/2530/2530217.png' alt = ""></img></a>
                </div>

                <a href='#skills' className='scroll-cue' aria-label='Scroll down' onClick={(e)=>{e.preventDefault(); const el=document.getElementById('skills'); if(el) el.scrollIntoView({behavior:'smooth'});}}>
                    <span className='scroll-cue__mouse'><span className='scroll-cue__wheel' /></span>
                </a>
        </div>

      <section id='skills' className='section' data-aos="fade-up" data-aos-duration="1000">
            <Skills/>
      </section>
      <section id='project' className='section' data-aos="fade-up" data-aos-duration="1000">
          <Projects/>
      </section>
      <section id='about' className='section' style={{color:'gray'}} data-aos="fade-up" data-aos-duration="1000">
            <About />
      </section>

    </div>
  )
}

export default Homepage
