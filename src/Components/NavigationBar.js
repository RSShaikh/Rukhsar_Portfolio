import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { ThemeContext } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function NavigationBar({ activeSection }) {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

   const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#about" id='logo1'>Rukhsar.dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            {navItems.map(item => (
            <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active fw-bold' : ''}
              >
                {item.label}
              </Nav.Link>
            ))}
            <Button variant={darkMode ? 'outline-light' : 'outline-dark'} onClick={toggleTheme} className="ms-3">
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
