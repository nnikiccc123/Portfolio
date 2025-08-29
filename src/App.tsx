import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";

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

      {/* Kasnije možeš dodati sekcije za Resume/CV, Projects, Contact */}
      {/* <section id="resume">...</section>
          <section id="projects">...</section>
          <section id="contact">...</section> */}
    </div>
  );
}

export default App;
