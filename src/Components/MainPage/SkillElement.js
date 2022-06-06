import React from 'react'
import '../../Styles/skillelement.scss'

function SkillElement({ svg, title, description }) {
  return (
    <div className="skill-element">
      <div className="vector">
        <h4>{svg}</h4>
      </div>
      <div className="desc">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SkillElement
