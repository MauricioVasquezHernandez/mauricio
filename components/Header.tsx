import React from 'react';

interface HeaderProps {
    onNavigateHome: () => void;
    onNavigateMyCourses: () => void;
    onNavigateMethodology: () => void;
    onNavigateNuestraEscuela: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome, onNavigateMyCourses, onNavigateMethodology, onNavigateNuestraEscuela }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={onNavigateHome} className="flex items-center space-x-3 focus:outline-none">
             <svg className="h-10 w-10 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <h1 className="text-2xl font-bold text-slate-800">Teología Contextual</h1>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={onNavigateHome} className="text-slate-600 hover:text-sky-600 transition-colors font-semibold">Inicio</button>
            <button onClick={onNavigateNuestraEscuela} className="text-slate-600 hover:text-sky-600 transition-colors font-semibold">Nuestra Escuela</button>
            <button onClick={onNavigateMethodology} className="text-slate-600 hover:text-sky-600 transition-colors font-semibold">Metodología</button>
            <button onClick={onNavigateMyCourses} className="text-slate-600 hover:text-sky-600 transition-colors font-semibold">Mis Cursos</button>
          </nav>
          <button className="hidden md:inline-block bg-sky-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-sky-700 transition-colors duration-300">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;