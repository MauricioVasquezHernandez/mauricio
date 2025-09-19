
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[50vh] min-h-[300px] flex items-center justify-center text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/church/1600/900')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-wide">Una Teología Para Todos</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Un espacio para transformar la sociedad desde el Evangelio. Descubre una fe viva, relevante y comprometida con la justicia y la fraternidad.
        </p>
      </div>
    </div>
  );
};

export default Hero;
