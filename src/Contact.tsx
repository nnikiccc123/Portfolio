import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles/Contact.css";

interface ContactProps {
  language: "sr" | "en";
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  // Tekstovi za dvojezičnu verziju
  const texts = {
    sr: {
      title: "Kontakt",
      nameLabel: "Ime i prezime:",
      emailLabel: "Email:",
      messageLabel: "Poruka:",
      button: "Pošalji",
      success: "Poruka je uspešno poslata!",
      error: "Došlo je do greške. Pokušaj ponovo.",
      emailTitle: "Nova poruka sa portfolia",
    },
    en: {
      title: "Contact",
      nameLabel: "Name and lastname:",
      emailLabel: "Email:",
      messageLabel: "Message:",
      button: "Send",
      success: "Message sent successfully!",
      error: "Something went wrong. Try again.",
      emailTitle: "New message from portfolio",
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      title: texts[language].emailTitle,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_2dv2jlg",
        "template_2s3vnam",
        templateParams,
        "DGNiNUqag0vbUkYFe"
      )
      .then(
        () => {
          setStatus(texts[language].success);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus(texts[language].error);
        }
      );
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">{texts[language].title}</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{texts[language].nameLabel}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>{texts[language].emailLabel}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>{texts[language].messageLabel}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{texts[language].button}</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
