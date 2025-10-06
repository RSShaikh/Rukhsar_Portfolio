import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ThemeContext } from './ThemeContext';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer className={`py-3 mt-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container className="text-center">
        <p className="mb-0" id='copyright'>© {new Date().getFullYear()} Rukhsar. All rights reserved.</p>
        <small>
          <a href="https://rsshaikh.github.io/Rukhsar_Portfolio/" target="_blank" rel="noopener noreferrer" className="me-3" id='github'>GitHub</a>
          <a href="https://rukhsarsshaikhportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" id='netlify'>Netlify</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" id='linkedin'>LinkedIn</a>
        </small>
      </Container>
    </footer>
  )
}
