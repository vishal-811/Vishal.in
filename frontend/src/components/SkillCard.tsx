import React from 'react';
import useTheme from '../contexts/Theme';

interface Skill {
  id: number;
  name: string;
  svg: string;
}

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'} border rounded-lg hover:shadow-lg hover:shadow-blue-400  hover:cursor-pointer transition duration-400 mb-3 relative p-4 hover:scale-110`}>
      <span className={`absolute w-[70%] h-px right-px -bottom-px ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0' : 'bg-gradient-to-r from-blue-400/0 via-blue-500 to-blue-400/0'}`}></span>
      <span className={`absolute w-px -left-px top-[30%] h-[60%] bg-gradient-to-b ${theme === 'dark' ? 'from-blue-400/0 via-blue-500/40 to-blue-500/0' : 'from-blue-500/0 via-blue-500/40 to-blue-500/0'}`}></span>
      <div className="flex flex-col md:flex-row max-w-md justify-center items-center md:space-x-3">
        <div className="w-10 h-10" dangerouslySetInnerHTML={{ __html: skill.svg }}></div>
        <p className={`${theme==='dark'?'text-gray-100':"text-gray-900"} font-grotesk text-sm md:text-base`}>{skill.name}</p>
      </div>
    </div>
  );
};
