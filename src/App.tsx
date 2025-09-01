import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";

function App() {
  const [language, setLanguage] = useState<"sr" | "en">("sr");

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />

      <section id="home">
        <Home language={language} />
      </section>

      <section id="about">
        <AboutMe language={language} />
      </section>

      <section id="resume">
        <Resume language={language} />
      </section>

      <section id="projects">
        <Projects language={language} />
      </section>
    </div>
  );
}

export default App;
