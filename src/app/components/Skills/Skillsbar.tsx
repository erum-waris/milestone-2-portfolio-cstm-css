import React from 'react';
import { SkillsbarProps } from '../../../../types/componentTypes';


const skillLevels: SkillsbarProps[] = [
    { title: "TypeScript", level: 70},
    { title: "Bootstrap", level: 20},
    { title: "JavaScript", level: 60},
    { title: "Tailwind", level: 40},
    { title: "Next.js", level: 40},
    { title: "HTML", level: 80},
    { title: "CSS", level: 70},
    { title: "React.js", level: 20},
];

export const SkillsBar: React.FC = () => {
  return (
        <div className='space-y-9 p-4 mb-2'> 
      {
        skillLevels.map((skill) => (
            <div key={skill.title}>
                <div className='flex justify-between mb-1 items-center text-blue-600 font-semibold hover:text-pink-500 h-auto'>
                    <span className='text-lg md:text-xl font-medium'>{skill.title}</span>
                    <span className='text-lg md:text-xl  font-medium'>{skill.level}%</span>
                </div>
                <div className="w-full bg-green-300 rounded-full h-4">
                    <div className='bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 h-4 rounded-full' style={{width: `${skill.level}%` }}>

                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default SkillsBar;