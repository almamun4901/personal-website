import React from "react";
import './Skills.css' // Create this file

const Skills = () => {
  // Local skills array with unique entries
  const localSkills = [
    'Python',
    'Java',
    'C',
    'C#',
    'MySQL',
    'React',
    'Tailwind',
    'Unity',
    '3D Modeling',
    'Material UI',
    'Git',
    'Microservices'
  ]

  return (
    <div className="w-full overflow-hidden bg-white-100 py-8">
      <div className="flex w-[200%] animate-marquee">
        {[...localSkills, ...localSkills].map((skill, index) => (
          <div
            key={`${skill}-${index % localSkills.length}`}
            className="w-1/2 flex justify-between items-center"
          >
            <span className="mx-8 text-2xl font-medium text-gray-600 whitespace-nowrap">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
