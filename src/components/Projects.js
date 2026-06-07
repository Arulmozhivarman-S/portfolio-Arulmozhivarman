import React, { useState } from 'react';
import "./Projects.css";

function Projects() {
    const [openIndex, setOpenIndex] = useState(null);

    const project = [
        {
            name: "House Price Prediction Using ML",
            img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
            link: "https://housepricepredictior.streamlit.app",
            description: "This project aims to predict the price of a house based on various features such as location, number of bedrooms and bathrooms, square footage, year built, and other relevant attributes. Using a machine learning model, the system learns patterns from historical housing data and estimates the market value of new properties."
        },
        {
            name: "AI Code Classifier Using Random Forest",
            img: "https://code.visualstudio.com/assets/docs/getstarted/userinterface/sidebyside.png",
            link: "https://ai-code-detector.streamlit.app/",
            description: "This project detects whether a piece of code was written by a human or an AI model using a trained Random Forest classifier."
        },
        {
            name: "Health and Wellness Dashboard",
            img: "https://shyamfuture.com/wp-content/uploads/2023/08/Health-and-Wellness-APP.jpg",
            link: "https://github.com/Arulmozhivarman-S/HEALTH-AND-WELLNESS",
            description: "A health monitoring platform built with React, Spring Boot, and SQL that helps users track fitness goals, wellness resources, and health data."
        },
        {
            name: "Online Medical Store",
            img: "https://techexactly.com/wp-content/uploads/2021/04/banner1.jpg",
            link: "https://github.com/Arulmozhivarman-S/ONLINE-MEDICAL-STORE",
            description: "An e-commerce platform for purchasing healthcare products and medicines, built with React, Spring Boot, and SQL."
        }
    ];

    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <h1 style={{ color: '#624E88' }}>Projects</h1>

            {project.map((pro, index) => (
                <div
                    key={index}
                    style={{ margin: "50px auto" }}
                    className="Projects"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <h2>{pro.name}</h2>

                    <div className="Projects-div">
                        <img
                            className="project-img"
                            src={pro.img}
                            alt={pro.name}
                        />
                    </div>

                   <button
                        className="toggle-btn"
                        onClick={() => toggleDescription(index)}
                        >
                        {openIndex === index ? "▲ Hide Description" : "▼ Show Description"}
                    </button>

                    {openIndex === index && (
                        <blockquote style={{ marginTop: "15px" }}>
                            <p>{pro.description}</p>
                        </blockquote>
                    )}

                    <br />

                    <a
                        href={pro.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        style={{
                            display: "inline-block",
                            marginTop: "10px",
                            color: "#624E88",
                            fontWeight: "bold"
                        }}
                    >
                        🔗 View Project
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Projects;