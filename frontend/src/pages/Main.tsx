
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import  { Projects }  from "../components/Projects";
import { Skills } from "../components/Skills";
import useTheme from "../contexts/Theme"
export const Main=()=>{
      const {theme} =useTheme();
    return(
        <main className={`${theme==='dark'?'bg-zinc-900' : 'bg-white'} flex flex-col p-6 `}>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 ">
                <Home/>
                <About/>
                <Projects/>
                <Skills/>
                <Contact/>
            </div>
        </main>
    )
}
