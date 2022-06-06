/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import Thunder from '../../Assets/svg/icons/Thunder'
import ThunderTwo from '../../Assets/svg/icons/Thundertwo'
import Stars from '../../Assets/svg/icons/Stars'

function Who() {
  /* $bg-color: #001319;
$blue-color: #0BB5FF;
$red-color: #FF004D;
$green-color: #FFB600; */

  const Thone = css`
  position: absolute;
  right: -110px;
  top: -50px;
  `

  const Thtwo = css`
  position: absolute;
  left: -110px;
  top: 50px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  `

  const StOne = css`
  position: absolute;
  left: -60px;
  top: -60px;
  `
  return (
    <section>
      <article>
        <h1>¿Quién soy?</h1>
        <div className="img-container">
          <Thunder
            fill="FF004D"
            width={200}
            css={Thone}
            className="vector-cool"
          />
          <ThunderTwo
            fill="#FF004D"
            width={200}
            css={Thtwo}
            className="vector-cool vector-cool2"
          />
          <Stars
            fill="#FF004D"
            width={150}
            css={StOne}
            className="vector-ele"
          />
        </div>
      </article>
      <article>
        <p>
          Soy un estudiante de ingenieria en ciencias de la computación en información, estudio en
          la Universidad del Valle de Guatemala. Vivo por la música y videojuegos, quiero
          dedicarme a ser frontend developer.
          Soy un estudiante de ingenieria en ciencias de la computación en información, estudio en
          la Universidad del Valle de Guatemala. Vivo por la música y videojuegos, quiero
          dedicarme a ser frontend developer.
        </p>
        <div className="list-container">
          <ul>
            <h2>Intereses</h2>
            <li>Heavy Metal</li>
            <li>Guitarra eléctrica</li>
            <li>Deporte</li>
            <li>Programación</li>
            <li>Videojuegos</li>
          </ul>
          <ul>
            <h2>
              Educación
            </h2>
            <li>Colegio Alpha y Omega</li>
            <li>Colegio Santa Maria Montes Claros</li>
            <li>Universidad del Valle de Guatemala</li>
          </ul>
        </div>
      </article>
    </section>

  )
}

export default Who
