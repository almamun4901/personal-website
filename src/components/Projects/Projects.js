import React from 'react'

const Projects = () => {
  const professionalWork = [
    {
      title: "Branding & Creative",
      description: "Put the spotlight on your brand...",
      tags: ["Brand Strategy", "Brand Identity", "Graphic Design"],
      image: `${process.env.PUBLIC_URL}/images/work/boys.jpeg`
    },
    {
      title: "Web Development", 
      description: "Create experiences that immerse consumers...",
      tags: ["Journey Mapping", "Website Design", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/girl.jpeg`
    },
    {
      title: "Web Development", 
      description: "Create experiences that immerse consumers...",
      tags: ["Journey Mapping", "Website Design", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/eye.jpeg`
    },
    {
      title: "Web Development", 
      description: "Create experiences that immerse consumers...",
      tags: ["Journey Mapping", "Website Design", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/green.jpeg`
    },
    {
      title: "Web Development", 
      description: "Create experiences that immerse consumers...",
      tags: ["Journey Mapping", "Website Design", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/social.jpeg`
    },
    {
      title: "Web Development", 
      description: "Create experiences that immerse consumers...",
      tags: ["Journey Mapping", "Website Design", "Interaction Design"],
      image: `${process.env.PUBLIC_URL}/images/work/web.jpeg`
    }
  ]

  if (!professionalWork.length) return null

  return (
    <section id='work' className='py-24'>
      <div className='w-full px-4 mx-auto max-w-7xl'>
        <div className='w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center mb-16'>
          <h2 className='mb-6 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight'>
            <span className='block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500'>
              Professional Work
            </span>
          </h2>
        </div>

        <div className='space-y-24'>
          {professionalWork.map((section) => (
            <div 
              key={section.title}
              className='flex flex-col items-center gap-8 md:gap-12 md:flex-row group'
            >
              {/* Text Content - Left Side */}
              <div className='md:w-1/2'>
                <h3 className='text-3xl font-bold relative inline-block'>
                  {section.title}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-green-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </h3>
                <p className='mt-4 text-gray-600'>{section.description}</p>
                
                <div className='flex flex-wrap gap-2 mt-6'>
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image - Right Side */}
              <div className='md:w-1/2'>
                <div className='relative overflow-hidden aspect-[16/9] group'>
                  <img
                    src={section.image}
                    alt={`${section.title} example`}
                    className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 transition-all duration-300 bg-black/0 group-hover:bg-black/20' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects