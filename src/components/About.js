import React from 'react'
import "./About.css"

function About() {
  return(
    <div style={{paddingBottom:'50px'}}>
        <div className='About'>
            <section >
                <div>
                  {/* <img style={{width:'300px',height:'400px'}} src=''/> */}
                </div>
                <div>
                  <h1 style={{color:'grey'}}>About Me</h1>
                </div>
                <div className='aboutmepara'>
                    <p>
                   
                    Hello! I'm a third-year Information Technology student at Sri Krishna College of Engineering and Technology (SKCET) in Coimbatore. At 19 years old, I’m driven by a passion for problem-solving, technology, and innovation. My journey in IT began with a curiosity for understanding how things work and has evolved into a dedicated pursuit of technical proficiency and creativity.
                    </p>
                    <p>
                    Currently, I’m focused on building a solid foundation in software development, data structures, and computer systems. My coursework has provided me with experience in programming languages such as Java, C++, and I’m continuously working to deepen my understanding of algorithms, web development, and database management.
                    </p>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About
