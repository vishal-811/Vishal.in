import React from 'react';
import useTheme from '../contexts/Theme';
import { SkillCard } from './SkillCard';
import skillData from '../data/SkillData.json';

export const Skills: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div id='skills'>
      <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold md:text-4xl text-2xl tracking-tight mt-12 mb-4`}>
        Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 ms-6">
        {skillData.data.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};
