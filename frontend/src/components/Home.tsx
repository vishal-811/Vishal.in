import useTheme from "../contexts/Theme";
import myimg from '../assets/myimg.png';

export const Home = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-44 w-full mb-10 md:mt-24 mt-24">
            {/* Left content */}
            <div className="flex md:w-3/4 flex-col mt-6">
                <h1 className={`font-bold text-3xl md:text-5xl tracking-tight mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Vishal Sharma</h1>
                <div className={`relative leading-7 items-center flex-wrap ${theme==='dark'?'text-zinc-400':'text-zinc-700'}  mb-5 ps-2 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-800'} text-xl`}>
                    <h2 >Building Cool Projects...</h2>
                </div>
                <p className={`${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-500'} text-lg`}>Full Stack Developer building web apps.</p>
            </div>
            
            {/* Right content with image */}
            <div className="relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
                <div className="z-0">
                    <div className={`absolute left-0 -right-12 top-0 h-px ${theme === 'dark' ? 'bg-zinc-300/[0.1]' : 'bg-slate-900/[0.1]'}  mt-4`}></div>
                    <div className={`absolute -top-12 bottom-0 left-12 w-px ${theme === 'dark' ? 'bg-zinc-300/[0.1]' : 'bg-slate-900/[0.1]'} h-16 mt-12`}></div>
                    <div className={`absolute left-0 -right-12 bottom-14 h-px ${theme === 'dark' ? 'bg-zinc-300/[0.1]' : 'bg-slate-900/[0.1]'} `}></div>
                    <div className={`absolute right-0 -top-2 -bottom-8 w-px ${theme === 'dark' ? 'bg-zinc-300/[0.1]' : 'bg-slate-900/[0.1]'}`}></div>
                    <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden"></div>
                    <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                    </div>
                </div>
                {/* Image */}
                <img className="block z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5 relative bg-white h-20 w-20 mt-4 md:mt-1 md:ms-20" src={myimg} alt="Vishal Sharma" />
            </div>
        </div>
    );
};
