import React, { useState } from "react";
import { FaPlus, FaMinus, FaUsers, FaLaptopCode } from "react-icons/fa";
import "./styles/Resume.css";

interface ResumeProps {
  language: "sr" | "en";
}

interface Experience {
  title: string;
  company: string;
  period: string;
  details: string;
}

interface Education {
  degree: string;
  school: string;
  year: string;
}

const Resume: React.FC<ResumeProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experiences: { sr: Experience; en: Experience }[] = [
    {
      sr: {
        title: "Back-end developer - Praksa",
        company: "Nokturno KOD DOO / Beograd",
        period: "feb. 2024 - maj 2024",
        details:
          "Rad na razvoju i unapređenju projekata koristeći C#, .NET, Razor i SQL. Dizajniranje i optimizacija logike pozadine, upravljanje bazama podataka i doprinos poboljšanju performansi i funkcionalnosti projekata.",
      },
      en: {
        title: "Back-end Developer - Internship",
        company: "Nokturno KOD DOO / Belgrade",
        period: "Feb 2024 - May 2024",
        details:
          "Worked on developing and improving projects using C#, .NET, Razor, and SQL. Designed and optimized backend logic, managed databases, and contributed to improving project performance and functionality.",
      },
    },
    {
      sr: {
        title: "Inženjer tehnoloških servisa - Praksa",
        company: "Nelt / Beograd",
        period: "sep. 2024 - feb. 2025",
        details:
          "Rad sa Microsoft tehnologijama (AD, Exchange, SCCM, O365, Azure, SFB, DNS, DHCP), rešavanje IT problema, konfiguracija i održavanje usluga, automatizacija zadataka pomoću PowerShell-a pod mentorstvom.",
      },
      en: {
        title: "Technology Services Engineer - Internship",
        company: "Nelt / Belgrade",
        period: "Sep 2024 - Feb 2025",
        details:
          "Worked with Microsoft technologies (AD, Exchange, SCCM, O365, Azure, SFB, DNS, DHCP), troubleshooting IT issues, configuring and maintaining services, and automating tasks using PowerShell under mentorship.",
      },
    },
    {
      sr: {
        title: "QA Tester & Support - Praksa",
        company: "NLB Komercijalna banka / Beograd",
        period: "apr. 2025 - ",
        details:
          "Obavljanje poslova u bankarskom sektoru, uključujući operativnu podršku, učešće u testiranju i vođenje prateće dokumentacije, uz analizu rezultata kako bi se osiguralo pravilno sprovođenje testiranja.",
      },
      en: {
        title: "QA Tester & Support - Internship",
        company: "NLB Komercijalna banka / Belgrade",
        period: "Apr 2025 - ",
        details:
          "Performed real-world tasks in the banking domain, including operational support, participation in testing, and handling documentation while analyzing results to ensure proper execution of business testing.",
      },
    },
  ];

  const education: { sr: Education; en: Education }[] = [
    {
      sr: {
        degree:
          "Inženjer organizacionih nauka - Fakultet organizacionih nauka / Beograd / 2025",
        school: "Informacioni sistemi i tehnologije",
        year: "2025",
      },
      en: {
        degree:
          "Organizational Science Engineer - Faculty of Organizational Sciences / Belgrade / 2025",
        school: "Information Systems and Technologies",
        year: "2025",
      },
    },
    {
      sr: {
        degree: "Diploma srednje škole - Valjevska gimnazija / Valjevo / 2020",
        school: "Društveno-jezički smer",
        year: "2020",
      },
      en: {
        degree: "High School Diploma - Valjevska Gimnazija / Valjevo / 2020",
        school: "Social-Linguistic Stream",
        year: "2020",
      },
    },
  ];

  const softSkills = {
    sr: [
      "Timski rad",
      "Rešavanje problema",
      "Prilagodljivost",
      "Analitičko razmišljanje",
      "Upravljanje projektima",
      "Kritičko razmišljanje",
    ],
    en: [
      "Teamwork",
      "Problem Solving",
      "Adaptability",
      "Analytical Thinking",
      "Project Management",
      "Critical Thinking",
    ],
  };

  const technicalSkills = {
    sr: [
      "Web development: HTML, CSS, SCSS, JS, TS",
      "React",
      "Razvoj API-ja",
      "Algoritamsko razmišljanje",
      "Rešavanje problema",
      "Računarstvo u oblaku",
      "Programski jezici: C#, Java, C, R",
      "Microsoft Office",
      "SQL i upravljanje bazama podataka",
      "Skripting: PowerShell",
      "Microsoft Dynamics NAV",
      "Git, GitHub",
      "AI, Photoshop, Canva, Figma",
    ],
    en: [
      "Web Development: HTML, CSS, SCSS, JS, TS",
      "React",
      "API Development",
      "Algorithmic Thinking",
      "Problem Solving",
      "Cloud Computing",
      "Programming Languages: C#, Java, C, R",
      "Microsoft Office",
      "SQL & Database Management",
      "Script Writing: PowerShell",
      "Microsoft Dynamics NAV",
      "Git, GitHub",
      "Ai, Ps, Canva, Figma",
    ],
  };

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="resume-background">
      <section className="timeline-resume">
        <h2 className="resume">{language === "sr" ? "CV" : "Resume"}</h2>

        <h3 className="timeline-title">
          {language === "sr" ? "Iskustvo" : "Experience"}
        </h3>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div
                className="timeline-header"
                onClick={() => toggleOpen(index)}
              >
                <span className="timeline-icon">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
                <div>
                  <h3>{exp[language].title}</h3>
                  <p className="company-period">
                    {exp[language].company} | {exp[language].period}
                  </p>
                </div>
              </div>
              {openIndex === index && (
                <div className="timeline-details">{exp[language].details}</div>
              )}
            </div>
          ))}
        </div>

        <div className="timeline-education">
          <h3>{language === "sr" ? "Obrazovanje" : "Education"}</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="education-item">
              <p>{edu[language].degree}</p>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <div className="skills-card">
            <FaUsers className="skill-icon" />
            <h4>{language === "sr" ? "Lične veštine" : "Soft Skills"}</h4>
            <ul>
              {softSkills[language].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="skills-card">
            <FaLaptopCode className="skill-icon" />
            <h4>
              {language === "sr" ? "Tehničke veštine" : "Technical Skills"}
            </h4>
            <ul>
              {technicalSkills[language].map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
