import React from 'react'
import "./About.css"

function About() {
  return (
    <div>

            <div className='About'>
                    <div style={{width:'60%'}}>
                        <h1>About Me</h1>
                        <hr style={{backgroundColor:'yellow',height:'.5px',width:'100%'}}></hr>
                       <div className='about-section'>
                           <div style={{width:'300px'}}>
                                  <h4>Name : Arulmozhivarman S</h4>
                                  <h4>Date of Birth : January 15,2005</h4>
                                  <h4>Address : Tamilnadu,India</h4>
                                  <h4>Zipcode : 637207</h4>
                                  <h4>Email : arul150105@gmail.com</h4>
                                  <h4>Phone : +91-8144774437</h4>
                            
                           </div>
                            <div style={{width:'300px'}}>
                                  <p>
                                    Hello! I’m Arulmozhivarman S, a passionate Full Stack Developer and an IT student at
                                    Sri Krishna College of Engineering and Technology, Coimbatore. 
                                    <br></br>
                                    <br></br>
                                    Currently in the final year of my degree,
                                    <br></br>
                                    <br></br>
                                    I’ve been immersing myself in the ever-evolving world of technology and web development.
                                    </p>
                            </div>
                       </div>
                    </div>
                    {/* <button style={{width:'100px'}}><a href='mailto:arul150105@gmail.com'> <b>Mail Me</b></a></button> */}
            </div>

    </div>
  )
}

export default About
