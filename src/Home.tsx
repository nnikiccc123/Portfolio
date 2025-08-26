import React from 'react';
import './styles/Home.css';
import hero from './assets/hero.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface HomeProps {
  language: 'sr' | 'en';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={hero} alt="Natalija Nikic" />
      </div>
      <div className="hero-right">
        <h1 className="hero-title">PORTFOLIO</h1>
        <div className="hero-socials">
          <p>
            <FaPhone className="icon" /> +381654102665
          </p>
          <p>
            <FaEnvelope className="icon" /> nnikiccc123@gmail.com
          </p>
          <p>
            <FaMapMarkerAlt className="icon" /> {language === 'sr' ? 'Beograd, 11000' : 'Belgrade, 11000'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
