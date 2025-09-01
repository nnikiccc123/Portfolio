import React from "react";
import "./styles/Projects.css";

interface Project {
  title: string;
  description: string;
  link?: string;
}

interface ProjectsProps {
  language: "sr" | "en";
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const projects: Project[] = [
    {
      title: language === "sr" ? "Sitcom Mix or Match" : "Sitcom Mix or Match",
      description:
        language === "sr"
          ? "Igra memorije sa temama serija Friends, The Modern Family i The Office, sa zvukovima i animacijama."
          : "Memory game with themes from Friends, The Modern Family, and The Office, including sounds and animations.",
      link: "#",
    },
    {
      title: language === "sr" ? "Projekat 2" : "Project 2",
      description: language === "sr" ? "" : "",
      link: "#",
    },
    {
      title: language === "sr" ? "Projekat 3" : "Project 3",
      description: language === "sr" ? "" : "",
      link: "#",
    },
  ];

  return (
    <div className="projects-background">
      <section className="projects-section">
        <h2 className="projects-title">
          {language === "sr" ? "Projekti" : "Projects"}
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {language === "sr" ? "Pogledaj projekat" : "View Project"}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
