import React, { useState } from 'react'
import "./Projects.css"

function Projects() {
    const [project,setProject] = useState([
        { name:"Health and Wellness",img:"https://techexactly.com/wp-content/uploads/2021/04/banner1.jpg", description:"Health and Wellness Application is an interactive platform designed to help users monitor and improve their health. The frontend, built with React.js, provides a dynamic and responsive user interface where users can track their fitness goals, access wellness resources, and manage personal health data.The backend, developed with Spring Boot, handles the business logic, managing user authentication, data processing, and communication between the frontend and the database. It ensures a secure and scalable environment for handling user data.The SQL database serves as the core for storing user information, health records, and wellness plans, ensuring efficient data retrieval and updates."},
        { name:"Online Medical store",img:"https://shyamfuture.com/wp-content/uploads/2023/08/Health-and-Wellness-APP.jpg", description:"Online Medical Store is a web-based platform designed to offer a convenient way to purchase healthcare products and medications. The frontend, developed with React.js, delivers a smooth and user-friendly shopping experience, allowing users to browse, search, and order products with ease.The backend, powered by Spring Boot, manages inventory, order processing, and user authentication while ensuring secure transactions and data handling. It also connects the frontend with the database, handles product availability checks, and manages customer orders.The SQL database stores essential data, including product details, customer information, and order histories, ensuring efficient retrieval and updates while maintaining the integrity of sensitive data."},
        { name:"Weather App",img:"https://t3.ftcdn.net/jpg/04/91/54/18/360_F_491541875_c0vIhFwHnRZvmRfJELvJxtSQbRDOwbGC.jpg" ,description:"Weather App is a simple and interactive application that allows users to enter the name of any city and instantly retrieve the current temperature using real-time data from the OpenWeatherAPI.The frontend, built with React.js, provides a smooth user experience where users can input a city and get the latest weather details displayed dynamically. The app fetches the temperature and other weather-related information via an API call to OpenWeatherAPI, offering quick and accurate results.This application demonstrates seamless integration of third-party APIs and provides a convenient way for users to check the weather conditions of any city in real time."}
    ])
    
    return (
    <div data-aos="fade-up" data-aos-duration="1000">
                <h1>My Projects</h1>
                {
                    project.map((pro,index)=>(
                        <div key={index} style={{margin:'50px auto'}} className='Projects' data-aos="fade-up" data-aos-duration="1000">
                                   <h1>{pro.name}</h1>
                                <div className='Projects-div'>
                                   <img className='project-img' style={{marginTop:'50px',width:'300px',height:'150px'}} src={pro.img}></img>
                                   <blockquote><p>{pro.description}</p></blockquote>
                                </div>  
                        </div>
                    ))
                }

    </div>
  )
}

export default Projects
