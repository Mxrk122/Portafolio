import React from 'react'
import '../../Styles/contact.scss'
import Instagram from '../../Assets/svg/icons/Instagram'
import Git from '../../Assets/svg/icons/Github'

function Contact() {
  return (
    <section className="contact">
      <h1>Contacto</h1>
      <p>Hey! Contacta conmigo, a lo mejor hasta podemos ser amigos :)</p>
      <div className="icons">
        <a href="https://www.instagram.com/typical_dude12/">
          <Instagram
            className="contact-icon"
            width="140px"
          />
        </a>
        <a href="https://github.com/Mxrk122">
          <Git
            className="contact-icon"
            width="140px"
          />
        </a>
      </div>
    </section>
  )
}

export default Contact
