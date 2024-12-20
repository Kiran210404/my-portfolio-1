import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Scholarship Portal",
      description:
        "This is a basic project implemented using C concepts. It is beginner-friendly and showcases the use of various programming concepts.",
      link: "https://github.com/Kiran210404/my-projects",
    },
    {
      title: "Hotel Management System",
      description: "This project demonstrates the use of basic C++ concepts.",
      link: "https://github.com/Kiran210404/Hotel-Management-System",
    },
    {
      title: "Portfolio Website",
      description:
        "This project demonstrates how to build a personal portfolio website using HTML, CSS, and JS.",
      link: "https://github.com/Kiran210404/My-portfolio-website",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
