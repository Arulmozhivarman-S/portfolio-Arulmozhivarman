import React, { useState } from 'react';
import "./Projects.css";

const PROJECTS = [
    {
        name: "Payment Ledger — Event-Driven Money Movement",
        img: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg",
        emoji: "💸",
        link: "https://github.com/Arulmozhivarman-S/payment-ledger",
        tech: ["Java 17", "Spring Boot", "Spring Security / JWT", "MySQL", "JPA"],
        description: "A production-grade double-entry payment ledger. Every transfer is idempotent (Idempotency-Key + a unique constraint), atomic, and safe under concurrency using pessimistic row locks with deterministic ordering plus optimistic versioning. Balances are stored as integer minor units — never floating point — and reliable event delivery is handled with a transactional outbox and a scheduled relay. Secured with JWT authentication and method-level authorization."
    },
    {
        name: "Order Processing System — Event-Driven Microservices",
        img: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
        emoji: "📦",
        link: "https://github.com/Arulmozhivarman-S/order-processing-system",
        tech: ["Java", "Spring Boot", "Apache Kafka", "Redis", "Docker"],
        description: "An event-driven order pipeline that decouples intake from fulfillment. Orders are accepted, validated, and published as events; downstream services handle inventory, payment, and notifications asynchronously over Kafka. Built as Spring Boot microservices with Redis for caching and idempotency and Docker for containerized local orchestration."
    },
    {
        name: "House Price Prediction Using ML",
        img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        emoji: "🏠",
        link: "https://housepricepredictior.streamlit.app",
        tech: ["Python", "scikit-learn", "Pandas", "Streamlit"],
        description: "Predicts the price of a house from features such as location, bedrooms, bathrooms, square footage, and year built. A machine learning model learns patterns from historical housing data and estimates the market value of new properties."
    },
    {
        name: "AI Code Classifier Using Random Forest",
        img: "https://code.visualstudio.com/assets/docs/getstarted/userinterface/sidebyside.png",
        emoji: "🤖",
        link: "https://ai-code-detector.streamlit.app/",
        tech: ["Python", "Random Forest", "scikit-learn", "Streamlit"],
        description: "Detects whether a piece of code was written by a human or an AI model using a trained Random Forest classifier."
    },
    {
        name: "Health and Wellness Dashboard",
        img: "https://shyamfuture.com/wp-content/uploads/2023/08/Health-and-Wellness-APP.jpg",
        emoji: "🩺",
        link: "https://github.com/Arulmozhivarman-S/HEALTH-AND-WELLNESS",
        tech: ["React", "Spring Boot", "MySQL"],
        description: "A health monitoring platform that helps users track fitness goals, wellness resources, and health data."
    },
    {
        name: "Online Medical Store",
        img: "https://techexactly.com/wp-content/uploads/2021/04/banner1.jpg",
        emoji: "💊",
        link: "https://github.com/Arulmozhivarman-S/ONLINE-MEDICAL-STORE",
        tech: ["React", "Spring Boot", "MySQL"],
        description: "An e-commerce platform for purchasing healthcare products and medicines."
    }
];

function ProjectCard({ pro, index }) {
    const [open, setOpen] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <article
            className="Projects"
            data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay={(index % 2) * 120}
        >
            <div className="project-media">
                {imgError ? (
                    <div className="project-fallback"><span>{pro.emoji}</span></div>
                ) : (
                    <img
                        className="project-img"
                        src={pro.img}
                        alt={pro.name}
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                )}
            </div>

            <div className="project-body">
                <h2>{pro.name}</h2>

                <div className="tech-tags">
                    {pro.tech.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                    ))}
                </div>

                <button className="toggle-btn" onClick={() => setOpen((o) => !o)}>
                    {open ? "▲ Hide details" : "▼ Show details"}
                </button>

                <div className={`project-desc ${open ? "open" : ""}`}>
                    <p>{pro.description}</p>
                </div>

                <a
                    href={pro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    🔗 View Project
                </a>
            </div>
        </article>
    );
}

function Projects() {
    return (
        <div className="projects-wrap" data-aos="fade-up" data-aos-duration="1000">
            <h1 style={{ color: '#a78bca' }}>Projects</h1>
            <div className="projects-grid">
                {PROJECTS.map((pro, index) => (
                    <ProjectCard key={pro.name} pro={pro} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
