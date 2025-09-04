import React from "react";
import "./styles/AboutMe.css";
import { FaPaintBrush, FaLaptopCode, FaLightbulb } from "react-icons/fa";

interface AboutMeProps {
  language: "sr" | "en";
}

const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  return (
    <section className="about-me">
      <h2>{language === "sr" ? "O meni" : "About me"}</h2>
      <p>
        {language === "sr" ? (
          <>
            Zdravo! Ja sam <strong>Natalija Nikić</strong>. Završila sam
            Fakultet organizacionih nauka, smer Informacioni sistemi i
            tehnologije. Kreativna sam osoba i želim da nastavim da se razvijam
            u IT-ju. Najviše me zanima Front-End razvoj i UI/UX, ali sam spremna
            da probam i druge oblasti u IT-ju.
          </>
        ) : (
          <>
            Hi! I'm <strong>Natalija Nikić</strong>. I graduated from the
            Faculty of Organizational Sciences, majoring in Information Systems
            and Technologies. I'm a creative person and I want to continue
            developing my skills in IT. I'm mostly interested in Front-End
            development and UI/UX, but I'm also ready to try other areas in IT.
          </>
        )}
      </p>

      <div className="about-facts">
        <div className="fact">
          <FaLaptopCode className="icon" />
          <p>
            {language === "sr" ? "Fokus na Front-End" : "Front-End Focused"}
          </p>
        </div>
        <div className="fact">
          <FaPaintBrush className="icon" />
          <p>
            {language === "sr"
              ? "Zainteresovana za UI/UX dizajn"
              : "UI/UX Enthusiast"}
          </p>
        </div>
        <div className="fact">
          <FaLightbulb className="icon" />
          <p>
            {language === "sr"
              ? "Spremna za nove izazove"
              : "Open to New Challenges"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
