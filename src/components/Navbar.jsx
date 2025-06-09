import { Contact } from './Contact'
import { Experience } from './Experience'
import { Profile } from './Profile'
import { Project } from './Projects'
import { Skills } from './Skills'

export function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar--list">
          <li className="navbar--list_items">
            <a href="#home">Home</a>
          </li>
          <li className="navbar--list_items">
            <a href="#Projects">Projects</a>
          </li>
          <li className="navbar--list_items">About</li>
          <li className="navbar--list_items">Nuevo</li>
        </ul>
      </nav>

      <section className="container">
        <Profile />
        <Experience />
        <Skills />

        <Project />
        <Contact />
      </section>
    </>
  )
}
