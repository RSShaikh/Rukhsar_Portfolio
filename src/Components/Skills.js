import React from 'react'

import { ProgressBar } from 'react-bootstrap';

export default function Skills() {
  return (
    <div className="container mt-4">
      <h2 id='skills2'>Skills</h2>
      <h5 id='frontend'>Frontend</h5>
      <ProgressBar now={80} label="React" />
      <ProgressBar now={75} label="Bootstrap" className="mt-2" />
      <ProgressBar now={70} label="CSS/JS" className="mt-2" />

      <h5 className="mt-4">Backend</h5>
      <ProgressBar now={90} label="Spring Boot" />
      <ProgressBar now={85} label="Java" className="mt-2" />
    </div>
  )
}
