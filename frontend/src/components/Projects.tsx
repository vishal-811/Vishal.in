import useTheme from "../contexts/Theme";
import { ProjectCard } from "./ProjectCard";
import projectdata from '../ProjectData.json';
import upcomingProject from "../UpcomingProject.json"

export const Projects = () => {
    const { theme } = useTheme();

    return (
        <>
        <div>
            <h2 className={`font-bold text-2xl md:text-4xl tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectdata.data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}

            </div>

            <a type='button' href='/Projects' className={`flex justify-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} hover:cursor-pointer`}>
                 See more
                 <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
             </a>
        </div>
           <div>
               <h2 className={`mt-12 font-bold text-2xl md:text-4xl tracking-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Upcoming Projects</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {upcomingProject.data.map((upcomingProject,index)=>{
                        return <ProjectCard key={index} project={upcomingProject}/>
                      })}
                 </div>
           </div>
        </>
    );
};
