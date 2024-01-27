import React from 'react'
import HTML from '../assests/html.png'
import JS from '../assests/javascript.png'
import Node from '../assests/node.png'
import ReactImg from '../assests/react.png'
import Tailwind from '../assests/tailwind.png'
import Github from '../assests/github.png'
import CSS from '../assests/css.png'
const Skills = () => {
    const tech=[
        {
            id:1, 
            src:HTML,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2, 
            src:CSS,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3, 
            src:JS,
            title:'JavaScript',
            style:'shadow-red-500'
        },
        {
            id:4, 
            src:ReactImg,
            title:'ReactJS',
            style:'shadow-green-500'
        },
        {
            id:5, 
            src:Node,
            title:'NodeJS',
            style:'shadow-pink-500'
        },
        {
            id:6, 
            src:Tailwind,
            title:'Tailwind CSS',
            style:'shadow-sky-500'
        },
        {
            id:7, 
            src:Github,
            title:'Github',
            style:'shadow-white'
        },
    ]
  return (
    <div name="Skill" 
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full 
        text-white'>
            <div>
                <br />
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Technical Skills
                </p>
                <p className='py-6'>I have some technical skills in this technology</p>
                
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 
            text-center py-8 px-12 sm:px-0'>
                {
                    tech.map(({id,title,src,style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 
                rounded-lg ${style}`}>
                    <img src={src} 
                    alt="" 
                    className={`w-20 mx-auto`}
                    />
                    <p>{title}</p>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Skills