import React from 'react'
import '../../Styles/projects.scss'
import ProjectElement from './ProjectElement'
import spotify from '../../Assets/img/spotify-ui.png'
import lab from '../../Assets/img/lab-game.png'
import cssart from '../../Assets/img/cssart.png'
import memory from '../../Assets/img/mem.png'

function Projects() {
  return (
    <section className="projects">
      <h1>Proyectos</h1>
      <div className="project-container">
        <a href="https://spotify-ui-copy.netlify.app/">
          <ProjectElement
            image={spotify}
            title="Spotify Ui Copy"
            description="Se trata de una copia funcional del UI de Spotify echa en React"
          />
        </a>
        <a href="https://lab-game-project.netlify.app/">
          <ProjectElement
            image={lab}
            title="Graffity Labyrinth"
            description="Un juego echo en react sobre crear y superar laberintos aleatorios"
          />
        </a>
        <a href="https://css-art-house-poly.netlify.app/">
          <ProjectElement
            image={cssart}
            title="CSS art"
            description="Una bella casa diseñada con CSS puro"
          />
        </a>
        <a href="https://heavy-card-memory.netlify.app/">
          <ProjectElement
            image={memory}
            title="Heavy Metal Memory"
            description="Un juego de emsa ambientado en Heavy Metal"
          />
        </a>
      </div>
    </section>
  )
}

export default Projects
