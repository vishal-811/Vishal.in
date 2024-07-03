import { Link } from "react-scroll";
import useTheme from "../contexts/Theme";
import { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";

export const Hamburger = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

//   const style = {
//     opacity: 1,
//     transform: 'translateY(0px) translateZ(px)'
//   };

const handleLinkClick = () => {
     setIsOpen(false);
  };


  return (
    <div className="w-full flex items-center space-x-2">
      <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
        <span className={`${theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'} hover:cursor-pointer`}>
          Home
        </span>
      </Link>
      <Link to="project" spy={true} smooth={true} offset={-100} duration={500}>
        <span className={`${theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'} hover:cursor-pointer`}>
          Projects
        </span>
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} p-2 rounded-md z-20`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {isOpen && (
        <div className={`z-60 flex flex-col top-20 absolute w-[85%] inset-x-0 mx-auto ${theme === 'dark' ? 'bg-gray-800 border-blue-200' : 'border-gray-100 divide-gray-300 bg-white'} ring- border p-4 rounded-lg shadow-xl divide-y hover:text-gray-900`}>
         <NavbarLinks path="project" name="Upcoming Projects" key="200" offsetNo={1250} handleLinkClick={handleLinkClick} />
          <NavbarLinks path="skills" name="Skills" key="201" offsetNo={-100} handleLinkClick={handleLinkClick} />
          <NavbarLinks path="contact" name="Contact me" key="202" offsetNo={-100} handleLinkClick={handleLinkClick} />
        </div>
      )}
    </div>
  );
};
