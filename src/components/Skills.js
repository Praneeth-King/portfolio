import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#68a8ad] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-2 text-center '>Skills</p>
              <p className='py-4 text-2xl'>"In my role as a Computer Science & Engineering student, I've to develop a strong skill set in web development". I'm proficienting in HTML, CSS, JavaScript, and React.
              <br /> Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'> <b>HTML</b></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'><b>CSS </b></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'><b>JAVASCRIPT </b></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'> <b>REACT</b></p>
              </div>
             
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'> <b>NODE JS</b></p>
              </div>
              
              
              
              
          </div>
      </div>
    </div>
  );
};
export default Skills;