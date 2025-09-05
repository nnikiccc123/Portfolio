import React from "react";
import "./styles/Footer.css"; // Kasnije stilizuješ po želji
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // ili bilo koje druge ikonice

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/nnikiccc123"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/natalijanikic"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/nnikiccc"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaInstagram />
      </a>
    </footer>
  );
};

export default Footer;
