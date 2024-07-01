import useTheme from "../contexts/Theme"

export const About=()=>{
     const {theme}=useTheme();
    return(
        <div className="flex flex-col mb-12">
             <div className={`font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black ${theme==='dark'?'text-white':'text-black'}`}>
                  <h2>About me</h2>
             </div>
               <div className="flex flex-wrap">
                   <p className={`${theme==='dark'?'text-zinc-400':'text-zinc-600'} text-lg leading-7`}>Hi, I'm Vishal, a passionate 20-year-old
                   <span className={`${theme==='dark'?'text-zinc-200':'text-zinc-900'} ps-2 text-xl font-bold tracking-normal`}>full stack developer</span> and <span className={`${theme==='dark'?'text-zinc-200':'text-zinc-900'} text-xl font-bold tracking-normal`}>freelancer</span> from India. I'm currently pursuing a Bachelor's degree in Information Technology. With a keen eye for detail and a drive for innovation, I strive to create seamless and efficient web solutions.
                   </p>
                   <p className={`${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-950'} md:pt-6 pt-4 text-2xl font-semibold text-center transition-colors duration-300 ease-in-out`}>
                        Let's <span className="text-3xl text-red-500 animate-pulse">build 🛠</span> something amazing together!
                   </p>
               </div> 
        </div>
    )
}