import React from 'react'
import '../../Styles/projectelement.scss'

function ProjectElement({ image, title, description }) {
  return (
    <div className="project-element">
      <img src={image} alt="project-preview" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default ProjectElement
