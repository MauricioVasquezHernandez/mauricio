import React from 'react';

interface MethodologyPageProps {
  onNavigateNuestraEscuela: () => void;
}

const MethodologyPage: React.FC<MethodologyPageProps> = ({ onNavigateNuestraEscuela }) => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          <div className="bg-sky-50 border-l-4 border-sky-500 p-6 rounded-r-lg mb-12">
              <h4 className="font-bold text-sky-800">Una Metodología con Propósito</h4>
              <p className="text-sky-700 mt-2">
                Nuestra metodología es el motor de nuestra visión. Para entender completamente cómo y por qué enseñamos, te invitamos a conocer el corazón de nuestro proyecto.
              </p>
              <button onClick={onNavigateNuestraEscuela} className="mt-4 font-semibold text-sky-600 hover:text-sky-800 transition-colors">
                Conoce Nuestra Escuela &rarr;
              </button>
          </div>

          <h2 className="text-4xl font-bold text-slate-800 text-center mb-4">Nuestra Metodología</h2>
          <p className="text-xl text-slate-600 text-center mb-12">
            Una teología viva que dialoga con la historia y se encarna en la realidad.
          </p>

          <div className="space-y-10 text-lg text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-3">1. Fidelidad a la Dei Verbum</h3>
              <p>
                Nuestro punto de partida es la Constitución Dogmática <span className="font-semibold">Dei Verbum</span> del Concilio Vaticano II. Creemos que para entender la Palabra de Dios, es crucial "investigar con atención lo que los hagiógrafos quisieron realmente dar a entender y lo que plugo a Dios manifestar con las palabras de ellos" (DV 12). Esto nos aleja de lecturas fundamentalistas o anacrónicas, buscando siempre la intención original del autor sagrado.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-3">2. El Método Histórico-Crítico y Contextual</h3>
              <p>
                Utilizamos las herramientas de la ciencia bíblica moderna. El método histórico-crítico nos permite "acompañar" al autor en su contexto: ¿qué circunstancias sociales, políticas y culturales vivía? ¿A qué comunidad le escribía? ¿Qué problemas buscaba resolver? Al comprender su mundo, el mensaje teológico se revela con una claridad y profundidad renovadas. No interpretamos libremente; buscamos la realidad teológica anclada en la historia.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-3">3. Una "Teología en Salida"</h3>
              <p>
                Inspirados por el magisterio del Papa Francisco, creemos que la teología no puede quedarse encerrada en las aulas. Debe "salir" al encuentro de las periferias humanas y existenciales. Por eso, cada curso busca responder a la pregunta: ¿cómo este mensaje ilumina nuestra realidad actual? El objetivo es que la teología se convierta en un <span className="italic">ethos</span>, una práctica de vida que promueva la justicia, la fraternidad y la dignidad humana.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-sky-700 mb-3">4. Del Mito al Ethos: Un Proceso Transformador</h3>
              <p>
                Entendemos la fe como un proceso dinámico. El <span className="font-semibold">mito</span> (la narrativa sagrada) nos lleva al <span className="font-semibold">rito</span> (la celebración y la vida comunitaria), y el rito debe transformarse en un <span className="font-semibold">ethos</span> (una forma de vivir en el mundo). Nuestros cursos están diseñados para guiar al estudiante a través de este camino, donde el conocimiento no es el fin, sino el medio para una conversión personal y un compromiso social.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologyPage;