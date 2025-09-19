
import React from 'react';
import { Level, CourseLevel } from '../types';

const LEVEL_DETAILS: CourseLevel[] = [
    { 
        id: Level.Principiante, 
        name: 'Principiante', 
        description: 'Juegos y cuentos para niños y familias.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    { 
        id: Level.Intermedio, 
        name: 'Intermedio', 
        description: 'Profundiza tu fe con bases sólidas.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    { 
        id: Level.Académico, 
        name: 'Académico', 
        description: 'Estudio riguroso con método científico.',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
        )
    },
    { 
        id: Level.Masterclass, 
        name: 'Masterclass', 
        description: 'Aprende con teólogos y expertos invitados.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        )
    }
];


interface CourseLevelTabsProps {
  activeLevel: Level;
  onSelectLevel: (level: Level) => void;
}

const CourseLevelTabs: React.FC<CourseLevelTabsProps> = ({ activeLevel, onSelectLevel }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {LEVEL_DETAILS.map((levelDetail) => {
        const isActive = activeLevel === levelDetail.id;
        return (
          <button
            key={levelDetail.id}
            onClick={() => onSelectLevel(levelDetail.id)}
            className={`p-4 rounded-lg text-left transition-all duration-300 transform hover:-translate-y-1 ${
              isActive
                ? 'bg-sky-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md'
            }`}
          >
            <div className="flex items-center">
                {levelDetail.icon}
                <h3 className="text-lg font-bold">{levelDetail.name}</h3>
            </div>
            <p className="text-sm mt-1">{levelDetail.description}</p>
          </button>
        );
      })}
    </div>
  );
};

export default CourseLevelTabs;