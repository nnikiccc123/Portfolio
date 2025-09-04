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
      title:
        language === "sr" ? "Map Distance Tracker" : "Map Distance Tracker",
      description:
        language === "sr"
          ? "Projekat koristi HTML, CSS, JavaScript, Leaflet.js i Google Maps tiles, i omogućava korisnicima da postavljaju tačke na mapu jednim klikom, povezuju ih linijama, izračunavaju razdaljine, brišu poslednju tačku desnim klikom, završavaju putanju dvostrukim klikom i brišu sve tačke."
          : "The project uses HTML, CSS, JavaScript, Leaflet.js, and Google Maps tiles, allowing users to place points on the map with a single click, connect them with lines, calculate distances, remove the last point with a right-click, finish a path with a double-click, and clear all points.",
      link: "https://nnikiccc123.github.io/MapDistanceTracker/",
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
