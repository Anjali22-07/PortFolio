 import { useState } from "react";
import "../projects.css";
  
 
const projects = [

  {
    title: "AuthApp",
    description:
      "A secure identity and access management API with JWT authentication, refresh tokens, OAuth2 and role-based authorization.",
    tech: "Java • Spring Boot • Spring Security • JWT • MySQL",
    github: "https://github.com/Anjali22-07/AuthApp",
  },
  {
    title: "GramSathiAI",
    description:
      "An AI-powered platform that helps citizens discover government schemes based on their personal eligibility.",
    tech: "Java • Spring Boot • Spring AI • Gemini • MySQL • React",
    github: "https://github.com/Anjali22-07/GramSathiAi",
  },
  {
    title: "AI HelpDesk Agent",
    description:
      "An intelligent support system that answers common questions and creates support tickets for more complex issues.",
    tech: "Java • Spring Boot • Spring AI • REST API • MySQL",
    github: "https://github.com/Anjali22-07/aiHelpDesk",
  },
  {
    title: "GSTLookup",
    description:
      "A Spring Boot backend application that integrates with an external GST API to verify GSTINs and retrieve taxpayer information.",
    tech: "Spring Boot • REST API • Jackson • MySQL",
    github: "https://github.com/Anjali22-07/GSTLookup",
  },
  {
    title: "RepoMind",
    description:
      "A developer tool that analyzes Java repositories and visualizes dependencies between classes and components.",
    tech: "Java • Spring Boot • React • React Flow",
    github: "https://github.com/Anjali22-07/RepoMind",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application that retrieves real-time weather information using an external weather API.",
    tech: "JavaScript • React • REST API",
    github: "https://github.com/Anjali22-07/weather-app",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <h2 className="projects-heading">Projects</h2>

        <div className="carousel-wrapper">

          <button
            className="carousel-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            ←
          </button>

          <div className="carousel-window">
            <div
              className="projects-track"
              style={{
                transform: `translateX(calc(-${current} * (33.333% + 16px)))`,
              }}
            >
              {projects.map((project, index) => (
                <article className="project-card" key={index}>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    <span>Tech Stack</span>
                    <p>{project.tech}</p>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn"
                  >
                    View Code
                  </a>

                </article>
              ))}
            </div>
          </div>

          <button
            className="carousel-btn next-btn"
            onClick={nextSlide}
            aria-label="Next project"
          >
            →
          </button>

        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${current === index ? "active" : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


