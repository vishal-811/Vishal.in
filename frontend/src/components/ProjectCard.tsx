import useTheme from "../contexts/Theme";
 
interface ProjectDatatype {
    link: string;
    label: string;
    svg: string |null;
    title: string;
    description: string;
    image?:undefined |string
    technologies: string[];
}

interface ProjectCardProps {
    project: ProjectDatatype;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project: { link, label, svg, title, description, technologies , image } }) => {
    const { theme } = useTheme();
    return (
        <a
            className="group mb-4 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            href={link}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <div className={`absolute inset-0 rounded-xl ${theme === 'dark' ? 'bg-gradient-to-r from-[#202D2E] to-[#303428]' : 'bg-gradient-to-r from-blue-100/50 to-teal-100/50'} opacity-0 transition duration-300 group-hover:opacity-100`}></div>
                <div className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"></div>
            </div>

            <div className="relative h-full">
                <span className={` ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0' : 'from-blue-400/0 via-blue-400/40 to-blue-400/0'} absolute w-[40%] -bottom-px right-px h-px`}></span>
                <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

                <div className={`flex flex-col items-start rounded p-4 relative ${theme === 'dark' ? 'border-gray-800' : ''}`}>
                    <div className="my-4">
                        {/* Add your SVG content here */}
                        {svg !== null && (
        <div dangerouslySetInnerHTML={{ __html: svg }} />
    )}
                        {(image !== null && image !== "") && (
        <img className=" bg-opacity-100" src={image} width={48} height={48} alt="Image Alt Text" />
    )}
                    </div>

                    <div>
                        <h4 className={`text-xl font-bold tracking-tight ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{title}</h4>
                        <p className={`leading-6 pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                           {description}
                        </p>
                        <div className="pt-4 flex md:flex-row flex-wrap">
                              {technologies.map((tech, index) => (
                                <p key={index} className={`${theme === 'dark' ? 'border border-zinc-700 text-gray-300 bg-transparent' : 'text-gray-700 bg-gray-50'} leading-5 mb-2 rounded-md text-xs italic mr-2 px-1`}>{tech}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};
