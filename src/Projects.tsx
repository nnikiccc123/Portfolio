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
      title: language === "sr" ? "eKnjizica" : "eKnjizica",
      description:
        language === "sr"
          ? "eKnjizica je veb aplikacija za online čitanje knjiga razvijena uz HTML, CSS i JavaScript sa modernim bibliotekama i animacijama. Aplikacija simulira prikaz knjiga i korisničko iskustvo."
          : "eKnjizica is a web app for online book reading built with HTML, CSS, and JavaScript using modern libraries and animations. The application simulates the display of books and the user experience.",
      link: "https://nnikiccc123.github.io/eKnjizica/",
    },
    {
      title: language === "sr" ? "Imposter" : "Imposter",
      description:
        language === "sr"
          ? "U ovom mini projektu sam razvila multiplayer igru u kojoj jedan igrač postaje “imposter”, dok ostali dobijaju istu reč. Igrači naizmenično daju asocijacije ili slične pojmove, a impostor pokušava da se uklopi i ne otkrije da ne zna pravu reč. Igra je izrađena korišćenjem HTML-a, CSS-a i JavaScript-a, sa modernim, responzivnim dizajnom i animacijama okretanja kartica."
          : "In this mini project, I developed multiplayer game where one player becomes the “imposter,” while the others receive the same word. Players take turns giving hints or related words, and the imposter must blend in without revealing they don’t know the correct word. The game is built with HTML, CSS, and JavaScript, featuring a modern, responsive design with card-flip animations.",
      link: "https://nnikiccc123.github.io/Imposter/",
    },
    {
      title: language === "sr" ? "Projekat 4" : "Projekat 4",
      description: language === "sr" ? "" : "",
      link: "#",
    },
    {
      title: language === "sr" ? "Projekat 4" : "Projekat 4",
      description: language === "sr" ? "" : "",
      link: "#",
    },
    {
      title: language === "sr" ? "Projekat 4" : "Projekat 4",
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
