import { useState ,useEffect } from "react";
import React  from "react";
import useTheme from "../contexts/Theme";
import { NavbarLinks } from "./NavbarLinks";
import { Hamburger } from "./Hamburger";
const Navbar: React.FC = () => {
  let Links=[
    { 
        id:'100',
        name:"Home",
        path:"home",
        offsetNo:-100
    },
    {
        id:'101',
        name:"About me",
        path:"about",
        offsetNo:-100
    },
    {
        id:'102',
        name:"Projects",
        path:"project",
        offsetNo:-100
    },
    { 
        id:'103',
        name:"Skills",
        path:"skills",
        offsetNo:-100
    },
    {
          id:'104',
          name:"Contact me",
          path:"contact",
          offsetNo:-100
    }
]

   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

     useEffect(() => {
      const handleResize = () => {
       setIsSmallScreen(window.innerWidth < 768);
      };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

    const {theme ,setTheme} =useTheme();

   function setThemeHandler(){
      const isCurrentDark = theme === 'dark';
     setTheme(isCurrentDark ? 'light' : 'dark');
    }
  const svgPath = theme === 'dark'
    ?'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    : 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
  const svgColor = theme === 'dark' ? 'text-teal-500' : 'text-black';

  return (
      <div className=" w-full fixed z-10">
      <nav className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-white bg-opacity-60'} sticky-nav top-0 filter backdrop-blur-lg  flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-0 md:mb-10 mx-auto z-50`}>
      <button type="button" onClick={setThemeHandler} className={`p-2 border solid rounded-2xl w-12 flex justify-center backdrop-blur ${theme==='dark'?'border-teal-500 hover:border-gray-200':'border-gray-400'}`}>
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
        
          <div>
              {!isSmallScreen?( <div className={`${theme==='dark'?'bg-zinc-900/90 text-zinc-200 ring-white/10':'bg-white/90  text-zinc-800 shadow-zinc-800/5 ring-zinc-900/5'} hidden sm:block rounded-full  px-3 text-sm font-medium shadow-lg  ring-1  backdrop-blur`}>
            {Links.map((linkdata)=>{
                return  <NavbarLinks path={linkdata.path} name={linkdata.name} key={linkdata.id} offsetNo={linkdata.offsetNo}/>
            })}
      </div>)
      :
       (<Hamburger/>)
      }
          </div>
    </nav>
      </div>
  );

};

export default Navbar;
