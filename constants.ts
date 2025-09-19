import { Course, Level } from './types';

export const COURSES: Course[] = [
  // Nivel Principiante (Niños)
  {
    id: 1,
    title: 'La Familia de Nazaret',
    description: 'Un viaje interactivo para conocer a Jesús, María y José. Aprende sobre el amor, la obediencia y la ayuda mutua en la familia a través de juegos y cuentos.',
    level: Level.Principiante,
    imageUrl: 'https://picsum.photos/seed/family/600/400',
    instructor: 'Equipo de Catequesis Infantil',
    syllabus: ['Introducción a la Sagrada Familia', 'Juego: El taller de José', 'Cuento: Un día en Nazaret', 'Actividad: Dibuja a tu familia'],
  },
  {
    id: 2,
    title: 'San José, el Héroe Silencioso',
    description: 'Descubre la historia de San José, un hombre de fe que protegió a su familia. Aprende sobre la valentía y la confianza en Dios con actividades divertidas.',
    level: Level.Principiante,
    imageUrl: 'https://picsum.photos/seed/hero/600/400',
    instructor: 'Equipo de Catequesis Infantil',
    syllabus: ['¿Quién fue San José?', 'El sueño de José y la huida a Egipo', 'Actividad: El protector de la familia', 'Canción: Un hombre justo'],
  },
  {
    id: 3,
    title: 'Jugando con las Parábolas',
    description: 'Jesús nos enseñó con historias asombrosas. Explora las parábolas más famosas con juegos de memoria, rompecabezas y lecciones para tu vida diaria.',
    level: Level.Principiante,
    imageUrl: 'https://picsum.photos/seed/parable/600/400',
    instructor: 'Equipo de Catequesis Infantil',
    syllabus: ['El Buen Samaritano', 'El Hijo Pródigo', 'Juego: Encuentra la oveja perdida', 'Aplicación: ¿Cómo ser un buen samaritano hoy?'],
  },

  // Nivel Intermedio
  {
    id: 4,
    title: 'Introducción a los Evangelios',
    description: '¿Quiénes eran Mateo, Marcos, Lucas y Juan? Aprende el contexto histórico y teológico de cada Evangelio para evitar lecturas literalistas y descubrir su mensaje profundo.',
    level: Level.Intermedio,
    imageUrl: 'https://picsum.photos/seed/gospels/600/400',
    instructor: 'Mauricio Vásquez Hernández',
    syllabus: ['El mundo en tiempos de Jesús', '¿Qué es un Evangelio?', 'Análisis de Marcos: El primer Evangelio', 'Comparativa de los sinópticos'],
  },
  {
    id: 5,
    title: 'Dei Verbum: La Palabra de Dios Hoy',
    description: 'Un curso esencial para entender cómo la Iglesia nos invita a leer la Biblia. Descubre los principios del Concilio Vaticano II para una fe más madura.',
    level: Level.Intermedio,
    imageUrl: 'https://picsum.photos/seed/word/600/400',
    instructor: 'Mauricio Vásquez Hernández',
    syllabus: ['El Concilio Vaticano II y la Revelación', 'Inspiración e Interpretación de la Escritura', 'La importancia de la Tradición y el Magisterio', 'Métodos de lectura bíblica'],
  },
  {
    id: 6,
    title: 'Historia de la Iglesia: Los Primeros Concilios',
    description: 'Explora los momentos clave que definieron nuestra fe. Comprende los debates, las herejías y las grandes verdades dogmáticas de los primeros siglos.',
    level: Level.Intermedio,
    imageUrl: 'https://picsum.photos/seed/history/600/400',
    instructor: 'Dr. A. Rodríguez Carmona',
    syllabus: ['El Concilio de Nicea (325)', 'El debate sobre la naturaleza de Cristo', 'El Concilio de Calcedonia (451)', 'El Credo como síntesis de fe'],
  },

  // Nivel Académico
  {
    id: 7,
    title: 'Teología Paulina y el Helenismo',
    description: 'Un estudio riguroso sobre cómo el pensamiento griego y el contexto del Imperio Romano influyeron en la teología de San Pablo. Basado en autores como V. Merchán y R. Aguirre.',
    level: Level.Académico,
    imageUrl: 'https://picsum.photos/seed/pauline/600/400',
    instructor: 'Dr. Vladimir Merchán',
    syllabus: ['Pablo de Tarso: Judío en la diáspora', 'Filosofía estoica y su eco en las cartas paulinas', 'La "justificación por la fe" en contexto', 'Análisis de la Carta a los Romanos'],
  },
  {
    id: 8,
    title: 'Exégesis del Evangelio de Marcos',
    description: 'Aplica el método histórico-crítico para analizar el Evangelio más antiguo. Descubre la intención del autor, su comunidad y el "secreto mesiánico".',
    level: Level.Académico,
    imageUrl: 'https://picsum.photos/seed/exegesis/600/400',
    instructor: 'Dr. Rafael Aguirre',
    syllabus: ['Introducción al método histórico-crítico', 'La estructura narrativa de Marcos', 'Análisis de perícopas clave', 'La teología de la cruz en Marcos'],
  },
  {
    id: 9,
    title: 'Cristología: De Nazaret al Cristo de la Fe',
    description: 'Un recorrido académico desde el Jesús histórico hasta la formulación dogmática de Cristo. Analiza las fuentes, los debates y la cristología de los primeros siglos.',
    level: Level.Académico,
    imageUrl: 'https://picsum.photos/seed/christology/600/400',
    instructor: 'Dr. Xavier Pikaza',
    syllabus: ['La búsqueda del Jesús histórico', 'Títulos de Cristo en el Nuevo Testamento', 'Los debates cristológicos (Arrianismo, Nestorianismo)', 'El dogma de Calcedonia y su significado'],
  },

  // Masterclass
  {
    id: 10,
    title: 'Invitado: Dr. Xavier Pikaza',
    description: 'Una clase magistral sobre la Teología de la Liberación y su relevancia en el contexto latinoamericano actual. Una oportunidad única para dialogar con un experto.',
    level: Level.Masterclass,
    imageUrl: 'https://picsum.photos/seed/pikaza/600/400',
    instructor: 'Dr. Xavier Pikaza',
    syllabus: ['Orígenes de la Teología de la Liberación', 'Opción preferencial por los pobres', 'Análisis de la realidad social desde la fe', 'Debate: Vigencia y futuro'],
  },
  {
    id: 11,
    title: 'Teología en Salida y el Papa Francisco',
    description: 'Un análisis profundo de los documentos clave del Papa Francisco (Evangelii Gaudium, Laudato Si\', Fratelli Tutti) y su llamado a una Iglesia misionera.',
    level: Level.Masterclass,
    imageUrl: 'https://picsum.photos/seed/francis/600/400',
    instructor: 'Mauricio Vásquez Hernández',
    syllabus: ['Evangelii Gaudium: La alegría del Evangelio', 'La ecología integral en Laudato Si\'', 'La fraternidad universal en Fratelli Tutti', 'Proyecto: Una acción de "Iglesia en salida"'],
  },
  {
    id: 12,
    title: 'El Método Contextual con Dr. Vladimir Merchán',
    description: 'Aprende directamente de uno de los pioneros de la teología contextual. Un taller práctico sobre cómo aplicar este método en tus estudios y en la pastoral.',
    level: Level.Masterclass,
    imageUrl: 'https://picsum.photos/seed/merchan/600/400',
    instructor: 'Dr. Vladimir Merchán',
    syllabus: ['¿Qué es la teología contextual?', 'Acompañando al autor bíblico', 'Del texto a la vida: Pasos para la actualización', 'Taller práctico con un texto del Antiguo Testamento'],
  },
];
