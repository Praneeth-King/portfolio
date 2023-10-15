import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../components/assets/praneeth.jpg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#68a8ad]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-7xl font-bold text-white">
            I code MERN Websites,
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
          I'm currently a Computer Science & Engineering student with a deep passion for web development. My expertise lies in crafting web applications, and I have hands-on experience with various technologies, including HTML, CSS, JavaScript, React, and more. My enthusiasm is centered on creating innovative and user-friendly websites. I'm presently pursuing my degree at VIT-AP University.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto h-56 w-56 md:h-64 md:w-64"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
