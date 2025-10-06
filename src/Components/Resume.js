import React from 'react'
import ResumeR from '../Assets/Sample_Resume.pdf';

export default function Resume() {
  return (
   <div className="container mt-5 text-center mb-5">
      <h2>Resume</h2>
      <a href={ResumeR} download className="btn btn-outline-primary mt-3">Download Resume</a>
    </div>
  )
}
