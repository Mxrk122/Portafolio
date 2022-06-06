import React from 'react'
import '../../Styles/mainpage.scss'
import { jsx, css } from '@emotion/react'
import { HiAcademicCap } from 'react-icons/hi'
import Skills from './Skills'
import Who from './Who'
import Projects from './Projects'
import Contact from './Contact'
import Sub from '../../Assets/svg/icons/Sub'

function MainPage() {
  return (

    <div className="main-page">
      <section>
        <h1>Marco Orozco</h1>
        <Sub
          className="sub"
          fill="#001319"
        />
      </section>

      <Who />

      <Skills />

      <Projects />

      <Contact />

    </div>
  )
}

export default MainPage
