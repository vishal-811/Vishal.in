
import { Link } from 'react-scroll';
import useTheme from '../contexts/Theme';
   interface LinksProps{
       path:string,
       name:string,
       key:string,
       offsetNo:number,
       handleLinkClick?:()=>{}
   }
export const NavbarLinks:React.FC<LinksProps>=({path , name ,offsetNo , handleLinkClick})=>{
     const { theme } = useTheme();
    return(
         <Link to={path} spy={true} smooth={true} offset={offsetNo} duration={500} onClick={handleLinkClick}>
          <div className={`${theme ==='dark'?'hover:text-gray-900 text-gray-200':'hover:text-gray-900 text-gray-700'}relative rounded-lg px-3 inline-block py-2 text-sm  transition-all delay-150 hover:cursor-pointer`}>
          <span className={`relative z-10  ${theme==='dark'?'text-gray-200':'text-gray-700'} hover:text-teal-600`}>{name}</span>
             {path === 'home' && (
                <span className={`absolute inset-x-1 -bottom-px h-px ${theme==='dark'?'bg-gradient-to-r from-blue-400/0 dark:via-blue-500 dark:to-blue-400/0':'bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0'}`}></span>
             )}
          </div>
        </Link>
    )
}