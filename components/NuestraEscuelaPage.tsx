import React from 'react';

const InfoCard: React.FC<{ title: string, children: React.ReactNode, icon: JSX.Element }> = ({ title, children, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
        <div className="flex items-center mb-3">
            <div className="text-amber-500 mr-3">{icon}</div>
            <h4 className="text-xl font-bold text-slate-800">{title}</h4>
        </div>
        <div className="text-slate-600">{children}</div>
    </div>
);


const NuestraEscuelaPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-800 text-center mb-4">Nuestra Escuela</h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Más que cursos, una comunidad de fe para la transformación del mundo.
          </p>

          {/* Founder Section */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center text-center md:text-left">
            <img 
              src="https://picsum.photos/seed/mauricio/200/200" 
              alt="Mauricio Vásquez Hernández"
              className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8 flex-shrink-0 border-4 border-sky-200"
            />
            <div>
              <h3 className="text-3xl font-bold text-sky-700 mb-2">Nuestro Fundador</h3>
              <p className="text-2xl font-semibold text-slate-800 mb-3">Mauricio Vásquez Hernández</p>
              <p className="text-lg text-slate-600 leading-relaxed">
                "Soy teólogo de la Universidad Católica de Oriente en Rionegro. Mi pensamiento ha sido profundamente formado por la visión de una 'teología en salida' del Papa Francisco y la guía del biblista Vladimir Merchán, quien me introdujo al revolucionario método de la teología contextual. Esta plataforma es el fruto de ese camino: un espacio para compartir una fe que dialoga, cuestiona y construye un mundo más justo y fraterno para todos."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoCard title="Nuestra Visión: 'Teología de la Calle'" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}>
                <p>Buscamos ser una escuela que rompe los muros del aula para llevar el Evangelio a la vida cotidiana. Una teología que no teme mancharse con el polvo del camino para anunciar la dignidad humana, la justicia y la opción preferencial por los pobres.</p>
            </InfoCard>

            <InfoCard title="Fundamento Académico" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>}>
                <p>Nuestro rigor se ancla en la <span className="font-semibold">Dei Verbum</span> y se enriquece con el pensamiento de grandes autores como <span className="font-semibold">Vladimir Merchán, Xavier Pikaza, y Rafael Aguirre</span>. Garantizamos un contenido fiel al Magisterio y en diálogo con la ciencia bíblica contemporánea.</p>
            </InfoCard>
            
            <InfoCard title="Estructura de Aprendizaje" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}>
                <ul className="list-disc list-inside space-y-1">
                    <li><span className="font-semibold">Principiante:</span> Lúdico y familiar.</li>
                    <li><span className="font-semibold">Intermedio:</span> Madurez de la fe.</li>
                    <li><span className="font-semibold">Académico:</span> Rigor y método científico.</li>
                    <li><span className="font-semibold">Masterclass:</span> Diálogo con expertos.</li>
                </ul>
            </InfoCard>

            <InfoCard title="Evaluación para la Transformación" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                <p>El aprendizaje se demuestra en la vida. Por eso, evaluamos con <span className="font-semibold">proyectos aplicados, podcasts, videos interactivos, y cuestionarios</span> que buscan aterrizar el mensaje. El objetivo es que la fe se convierta en un ethos que transforma la realidad.</p>
            </InfoCard>

            <InfoCard title="El Futuro: Comunidad y Acceso" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}>
                <p>Soñamos con una comunidad creciente. Próximamente integraremos <span className="font-semibold">nuevos profesores, foros de debate, y un sistema de becas o aportes voluntarios</span> para que nadie se quede fuera. ¡Esto es solo el comienzo!</p>
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuestraEscuelaPage;