import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

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
      <section id="contact">
        <Contact language={language} />
      </section>

      <Footer />
    </div>
  );
}

export default App;
