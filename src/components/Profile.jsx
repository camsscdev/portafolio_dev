import iconCv from '../assets/curriculum_icon.png'
import iconGithub from '../assets/github_icon.png'
import iconLinkedin from '../assets/linkedin_icon.png'

import photo from '../assets/phot_profile.jpeg'
export function Profile() {
  return (
    <section className="header-introduction">
      <div className="container-profile">
        <div>
          <h1>
            <>Camilo S. Soler</>
          </h1>
          <h2>Desarrollador Web Frontend</h2>
          <p>
            Desarrollador frontend con 6 años de experiencia, especializado en
            interfaces de usuario intuitivas y diseño responsivo. Hábil en
            optimización de rendimiento y prácticas de UX.
          </p>
          <div className="bar-glass-network">
            <a href="https://github.com/camsscdev" target="_blank">
              <img src={iconGithub} alt="" title="Github" width={43} />
            </a>
            <a
              href="../assets/documents/HDV-CAMILO_SOLER.pdf"
              target="_blank"
              title="Descargar currículum"
              download="HDV-CAMILO_SOLER.pdf">
              <img
                src={iconCv}
                alt=""
                title="Descargar currículum"
                width={33}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/camilo-steven-soler-corredor-1976a71ab/"
              target="_blank">
              <img src={iconLinkedin} alt="" title="LinkedIn" width={37} />
            </a>
          </div>
        </div>

        <div>
          <figure>
            <img src={photo} className="photo-profile" />
          </figure>
        </div>
      </div>
    </section>
  )
}
