import React from 'react'
import SkillElement from './SkillElement'
import ReactLogo from '../../Assets/svg/icons/ReactLogo'
import Java from '../../Assets/svg/icons/Java'
import Css from '../../Assets/svg/icons/CssLogo'
import HtmlLogo from '../../Assets/svg/icons/HtmlLogo'
import Python from '../../Assets/svg/icons/PythonLogo'
import Unity from '../../Assets/svg/icons/UnityLogo'
import Sql from '../../Assets/svg/icons/SqlLogo'
import Csharp from '../../Assets/svg/icons/Csharp'
import Adobe from '../../Assets/svg/icons/Adobe'
import '../../Styles/skills.scss'

function Skills() {
  return (
    <section className="skills">
      <h1>Habilidades</h1>
      <div className="skill-container">
        <SkillElement
          svg={(
            <ReactLogo
              fill="#FF004D"
              width={140}
            />
          )}
          title="React"
          description="Componentes, module bundlers y sitios interactivos"
        />
        <SkillElement
          svg={(
            <Css
              fill="white"
              width={140}
            />
          )}
          title="CSS"
          description="Responsive design y estilos interesantes"
        />
        <SkillElement
          svg={(
            <HtmlLogo
              fill="white"
              width={140}
            />
          )}
          title="HTML"
          description="Creación de sitios web básicos y conocimiento de etiquetas"
        />
        <SkillElement
          svg={(
            <Python
              fill="Python"
              width={140}
            />
          )}
          title="Python"
          description="Programación funcional y dominio del lenguaje"
        />
        <SkillElement
          svg={(
            <Java
              fill="white"
              width={140}
            />
          )}
          title="Java"
          description="Pogramación orientada a objeto y unit testing (mi lenguaje favorito)"
        />
        <SkillElement
          svg={(
            <Unity
              fill="white"
              width={140}
            />
          )}
          title="Unity"
          description="Experiencia con creación de juegos y assets"
        />
        <SkillElement
          svg={(
            <Sql
              fill="white"
              width={140}
            />
          )}
          title="PostgreSql"
          description="Creación de sistemas, triggers y transacciones"
        />
        <SkillElement
          svg={(
            <Csharp
              fill="white"
              width={140}
            />
          )}
          title="C#"
          description="Programación orientada a objetos y lenguaje utilizado para crear videojuegos"
        />
        <SkillElement
          svg={(
            <Adobe
              fill="white"
              width={140}
            />
          )}
          title="Adobe"
          description="Experiencia con vectores, Illustrator y Photoshop"
        />
      </div>
    </section>
  )
}

export default Skills
