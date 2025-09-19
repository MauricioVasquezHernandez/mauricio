import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl font-bold mb-2 font-merriweather">Teología Contextual</p>
        <p className="mb-6">Una teología en salida para transformar el mundo.</p>
        <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Teología Contextual. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
