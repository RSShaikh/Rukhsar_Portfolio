
import React from 'react'
import { Button, Card } from 'react-bootstrap';



export default function Projects() {
    const projects = [

  {
    title: 'Portfolio Site',
    description: 'Modular React SPA with theme toggling and responsive layout.',
    link: 'http://localhost:3000/Rukhsar_Portfolio',
  },
];

  return (
    <div className="container mt-5 mb-5">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((proj, idx) => (
          <div className="col-md-6 mb-4" key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.description}</Card.Text>
                <Button variant="primary" href={proj.link} target="_blank">View Project</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
