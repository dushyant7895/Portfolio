import React from "react";

const About = () => {
  return (
    <div name="About"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
         I completed my 10th and 12th from 'Shri Ram Bal Bharti Inter College,Etah'. And I 
         completed my 'Bachelor of Computer Application'(BCA) from 'GLA University'. Currently pursuing 
         'Master of Computer Application'(MCA) from 'Harcourt Butler Technical University'(HBTU), Kanpur. 
        </p>
        <br />
        <p className="text-xl">
         I am a quick learner. I am punctual toward the work and time. I solved 200+ DSA problem question
          in online plateform like 'Leetcode', 'CodeStudio' etc. 
        </p>
        <br />
        <p className="text-xl">
         I have some technical skills in Java, JavaScript, ReactJS, SQL, NodeJS. 
        </p>
      </div>
    </div>
  );
};

export default About;
