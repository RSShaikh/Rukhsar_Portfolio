import React from 'react'
import rukhsar from '../Assets/profile1.jpg';

export default function About() {
  return (
    <div>
    <div className="container mt-5" id="about">
      <h2 className="mb-4">About Me</h2>
      <div className="row align-items-center">
        {/* Left Column: Text */}
        <div className="col-md-7">
          <p id='about-text' style={{ textAlign: 'justify', fontSize: '16px' }}>
            👋 Hi, I’m <strong>Rukhsar Shaikh </strong>  , a dedicated Full Stack Java Developer with expertise in building scalable and efficient web applications. I specialize in creating responsive front-end interfaces using HTML, CSS, JavaScript, React, and Bootstrap, and developing robust back-end solutions with Java and Spring Boot. Skilled in MySQL and SQL, I focus on writing clean, maintainable code and delivering seamless user experiences. I’m passionate about continuous learning and contributing to innovative, growth-oriented projects.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className= " col-md-5 text-center">
          <img id='profile-image'
            src= {rukhsar}   // Make sure this image exists in your public or assets folder
            alt="Rukhsar"
            className="img-fluid rounded-circle shadow"
            width="200"
            loading="lazy"
            
          />
        </div>
      </div>
    </div>
    </div>
  )
}
