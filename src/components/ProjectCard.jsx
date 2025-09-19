import React from 'react'

const ProjectCard = ({ title, desc, img, link1, link2 }) => {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition" 
      data-aos="fade-up"
    >
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{desc}</p>

{/* 
        <a href={link} target="_blank"
            class="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 font-medium">
            View Live
        </a>
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View Project
        </a> */}

        <div className="mt-auto flex gap-3">
            <a href={link1} target="_blank"
               className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium">
              Live Demo
            </a>
            <a href={link2} target="_blank"
               className="flex-1 text-center px-4 py-2 bg-gray-700 text-white rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 font-medium">
              GitHub
            </a>
          </div>
      </div>
    </div>
  )
}

export default ProjectCard
