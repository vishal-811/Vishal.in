
import useTheme from "../contexts/Theme"
export const Skills=()=>{
    const {theme} =useTheme();
    return(
        <div>
             <h2 className={`${theme==='dark'?"text-white": "text-balck"} font-bold md:text-4xl text-2xl tracking-tight mt-12 mb-4`}>Skills</h2>
                 <div>
                     
                 </div>
        </div>
    )
}