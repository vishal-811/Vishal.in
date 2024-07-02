import React from "react";
import useTheme from "../contexts/Theme";
const Navbar: React.FC = () => {
    const {theme ,setTheme} =useTheme();

    function setThemehandler(){
      const isCurrentDark = theme === 'dark';
      setTheme(isCurrentDark ? 'light' : 'dark');
    }
  const svgPath = theme === 'dark'
    ?'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
  const svgColor = theme === 'dark' ? 'text-teal-500' : 'text-black';

  return (
    <nav className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-white bg-opacity-60'} fixed top-0 z-40 flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-0 md:mb-10 md:ms-80 mx-auto filter backdrop-blur-lg`}>
      <button type="button" onClick={setThemehandler} className="p-2 border solid rounded-2xl w-12 flex justify-center backdrop-blur">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className={`h-4 w-4 ${svgColor}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={svgPath}
          />
        </svg>
      </button>
      <div className="backdrop-blur">
        <p>Hello, I am Vishal</p>
      </div>
    </nav>
  );
};

export default Navbar;
