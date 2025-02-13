import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { photo, name, role, description, resume, social } = about

  return (
    <div className='flex flex-col md:flex-row items-center justify-between min-h-screen py-20 px-5 md:px-20'>
      {/* Left Section - Text Content */}
      <div className='md:w-1/2 md:pr-10 mb-10 md:mb-0'>
        {name && (
          <h1 className='text-5xl font-bold mb-4'>
            Hi, This is <span className='text-purple-400'>{name}.</span>
          </h1>
        )}
        
        {role && <h2 className='text-3xl mb-6'>A {role}.</h2>}
        
        <p className='text-lg mb-8 leading-relaxed'>
          {description && description}
        </p>

        <div className='flex space-x-4'>
          {resume && (
            <a href={resume} className='btn btn--outline rounded-full px-8 py-3'>
              Resume
            </a>
          )}
          {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='p-2 hover:text-purple-600 transition-colors'
                >
                  <GitHubIcon style={{ fontSize: '2rem' }} />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='p-2 hover:text-purple-600 transition-colors'
                >
                  <LinkedInIcon style={{ fontSize: '2rem' }} />
                </a>
              )}
            </>
          )}
        </div>
      </div>

      {/* Right Section - Photo */}
      {photo && (
        <div className='md:w-1/2 flex justify-center md:justify-end group relative'>
          <img 
            className='rounded-lg shadow-2xl w-full max-w-md h-auto 
                       transition-all duration-300 
                       hover:scale-105 hover:shadow-3xl
                       transform-gpu cursor-pointer'
            alt={name || "Portrait"} 
            src={photo} 
          />
          <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                         rounded-lg pointer-events-none' />
        </div>
      )}
    </div>
  )
}

export default About
