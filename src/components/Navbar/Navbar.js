import { useState } from 'react'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav font-monument'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href="https://drive.google.com/your-projects-link"
              target="_blank"
              rel="noopener noreferrer"
              className='link link--nav'
              onClick={toggleNavList}
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href="https://drive.google.com/your-skills-link"
              target="_blank"
              rel="noopener noreferrer"
              className='link link--nav'
              onClick={toggleNavList}
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href="https://drive.google.com/your-contact-link"
              target="_blank"
              rel="noopener noreferrer"
              className='link link--nav'
              onClick={toggleNavList}
            >
              Contact
            </a>
          </li>
        ) : null}

        <li className='nav__list-item'>
          <a
            href="https://docs.google.com/document/d/1RM9cCEjsXV0zl42m8e8IK8ZaRM1A39ss/edit?usp=sharing&ouid=102828850000258196631&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className='link link--nav'
            onClick={toggleNavList}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
