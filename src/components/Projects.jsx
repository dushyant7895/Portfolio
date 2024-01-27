import React from 'react'
import Project1 from '../assests/Project1.png'
import Project2 from '../assests/Project2.png'
import Project3 from '../assests/Project3.png'
import Project4 from '../assests/Project4.png'

const Projects = () => {
    const project =[
        {
            id:1,
            src:Project1,
            
            href: 'https://github.com/dushyant7895/MovieStar_Website'

        },
        {
            id:2,
            src:Project2,
            href: 'https://github.com/dushyant7895/MovieStar_React-Native-App'
        },
        {
            id:3,
            src:Project3,
            href: 'https://github.com/dushyant7895/Library-Management-System'
        },
        {
            id:4,
            src:Project4,
            href: 'https://github.com/dushyant7895/Portfolio'

        },
        
        
        
    ]
  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {project.map(({ id, src,href }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <a href={href} 
                rel="noreferrer"
                target='_blank' 
                >
                  <button 
                  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                   Code
                  </button></a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects