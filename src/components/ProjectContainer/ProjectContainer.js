// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='relative group'>
    <div className='overflow-hidden transition-all duration-300 rounded-xl hover:shadow-xl'>
      <div className='relative aspect-[5/4]'>
        <img
          src={project.image}
          alt={project.name}
          className='object-cover w-full h-full transition-all duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 transition-all duration-300 bg-black/0 group-hover:bg-black/50'>
          <div className='flex flex-col h-full p-6 opacity-0 transition-all duration-300 group-hover:opacity-100'>
            <span className='mt-auto text-2xl font-bold text-white'>{project.name}</span>
            <h3 className='text-xl font-semibold text-white'>{project.name}</h3>
            <p className='mt-2 text-gray-300 line-clamp-3'>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className='mt-4'>
      <div className='flex flex-wrap gap-2'>
        {project.stack.map((tech) => (
          <span 
            key={tech}
            className='px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
