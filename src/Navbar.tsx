import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './styles/Navbar.css'
import logo from './assets/logoNN.png'
import flagGB from './assets/uk.png'
import flagRS from './assets/serbia.png'

interface NavbarProps {
  language: 'sr' | 'en'
  setLanguage: React.Dispatch<React.SetStateAction<'sr' | 'en'>>
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleLanguage = () => setLanguage(prev => (prev === 'sr' ? 'en' : 'sr'))

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img src={logo} alt="Natalija Nikic Logo" />
        </a>

        {/* Linkovi */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>
            {language === 'sr' ? 'O meni' : 'About Me'}
          </a>
          <a href="#resume" onClick={() => setIsOpen(false)}>
            {language === 'sr' ? 'CV' : 'Resume'}
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            {language === 'sr' ? 'Projekti' : 'Projects'}
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            {language === 'sr' ? 'Kontakt' : 'Contact'}
          </a>

          {/* Language switcher */}
          <span className="language-switch" onClick={toggleLanguage}>
            <img
              src={language === 'sr' ? flagGB : flagRS}
              alt={language === 'sr' ? 'English' : 'Srpski'}
              className="flag-icon"
            />
          </span>
        </div>

        {/* Mobile menu ikonice */}
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
