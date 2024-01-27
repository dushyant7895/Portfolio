import React from 'react'

const Contact = () => {
  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-black
      to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact
                </p>
                <p className='py-6'>Submit the form below to get contact to me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/45346f0f-f178-436d-a59e-bee2b0bb61fa"
                className='flex flex-col w-full md:w-1/2'
                method='POST'
                >
                    <input type="text" 
                    name='name'
                    placeholder='Enter Your Name'
                    className='p-2 bg-transparent border-2 rounded-md text-white 
                    focus:outline-none'
                    />
                    <input type="text" 
                    name='email'
                    placeholder='Enter Your Email'
                    className='p-2 my-4 bg-transparent border-2 rounded-md text-white 
                    focus:outline-none'
                    />
                    <textarea name="message" rows="10"
                    placeholder='Enter your messages'
                    className='p-2 bg-gradient-to-b border-2 rounded-md text-white
                     focus:outline-none'
                    ></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500
                     px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact