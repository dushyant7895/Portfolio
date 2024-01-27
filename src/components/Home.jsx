import React from 'react'
import HeroImage from '../assests/heroimage.png'
import { MdDoubleArrow } from "react-icons/md";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div
    name="Home"
    className='h-screen w-full bg-gradient-to-b from-black
    to-gray-800 via-black'
    >
        <div className='max-w-screen-lg  mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Web Developer
                </h1>
                <p className='text-gray-500 py-4 max-w-md'>
                    I love to work on web application using technologies like HTML, CSS, 
                    ReactJS, Tailwind, SQL, NodeJS, ExpressJS and MongoDB.
                </p>
                <div>
                <Link to="Project" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                 from-cyan-500 to-blue-500 cursor-pointer'>
                Portfolio 
                     <span className='group-hover:rotate-90 duration-300'>
                     <MdDoubleArrow size={25}
                     className='ml-1'/>
                    </span>
                     </Link>
                </div>
            </div>
            
        <div>
            <img src={HeroImage} alt="my profile" 
            className='rounded-2xl mx-auto w-1/3 md:w-2/3 md:full'/>
        </div>
        </div>
    </div>
  )
}

export default Home