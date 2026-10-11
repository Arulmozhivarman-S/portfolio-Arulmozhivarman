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
                  <h1 style={{color:'#624E88'}} >About Me</h1>
                </div>
                <div className='aboutmepara'>
                    <p>
                    Hi, I’m Arul! I’m currently pursuing my Master’s in Computer Science at Northeastern University, specializing in backend engineering and distributed systems.I have hands-on experience building robust backend services using Java and Spring Boot, with a focus on designing scalable, reliable systems engineered for high availability and performance. Whether optimizing relational database architecture or building event-driven microservices, I thrive on solving complex engineering challenges and collaborating with cross-functional teams.Core Focus amp; Tech Stack:Backend amp; Architecture: Java, Spring Boot, Microservices, REST APIs, System DesignData amp; Storage: MySQL, Redis, Database Normalization amp; ER ModelingTooling: Docker, Git, Event-Driven PatternsI am currently seeking Backend Software Engineering Co-op / Internship opportunities where I can solve meaningful technical problems, contribute to high-concurrency systems, and continue growing alongside talented engineering teams. Let’s connect!
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
