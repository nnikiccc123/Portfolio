import React from "react";
import "./styles/Home.css";
import hero from "./assets/IMG_0284 (1).jpg";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

interface HomeProps {
  language: "sr" | "en";
}

const Home: React.FC<HomeProps> = ({ language }) => {
  return (
    <section className="hero">
      {/* leva strana */}
      <div className="hero-left">
        <img src={hero} alt="Natalija Nikic" />
      </div>

      {/* desna strana */}
      <div className="hero-right">
        <h1 className="hero-title">PORTFOLIO</h1>
        <p className="hero-name">Natalija Nikić</p>

        <div className="hero-details">
          {/* leva kolona */}
          <div className="hero-socials">
            <p>
              <FaPhone className="icon" /> +381654102665
            </p>
            <p>
              <FaEnvelope className="icon" /> nnikiccc123@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt className="icon" />{" "}
              {language === "sr" ? "Beograd, 11000" : "Belgrade, 11000"}
            </p>
          </div>

          {/* desna kolona */}
          <div className="hero-links">
            <p>
              <a
                href="https://github.com/nnikiccc123"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                <FaGithub className="icon" /> github.com/nnikiccc123
              </a>
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/natalijanikic"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link"
              >
                <FaLinkedin className="icon" /> linkedin.com/in/natalijanikic
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
