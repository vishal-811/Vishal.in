import Navbar from "../components/Navbar"
import { Main } from "./Main"
import useTheme from "../contexts/Theme"

export const Layout=()=>{
     const {theme} =useTheme();
    return(
        <div className={`${theme==='dark'?'bg-zinc-900' : 'bg-white'} w-full h-screen`}>
              <Navbar/>
              <Main/>
        </div>
    )
}