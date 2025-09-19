import React from 'react';
import { Course } from '../types';

interface CourseDetailPageProps {
  course: Course;
  onEnroll: (courseId: number) => void;
  isEnrolled: boolean;
  onBack: () => void;
}

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, onEnroll, isEnrolled, onBack }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={onBack} className="mb-8 text-sky-600 hover:text-sky-800 font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Volver a todos los cursos
      </button>

      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">{course.title}</h2>
              <p className="text-slate-500 mb-4 font-semibold">Instructor: {course.instructor}</p>
              <p className="text-slate-600 text-lg">{course.description}</p>
            </div>
            <button
              onClick={() => onEnroll(course.id)}
              disabled={isEnrolled}
              className={`mt-8 w-full font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300 ${
                isEnrolled
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
              }`}
            >
              {isEnrolled ? 'Inscrito' : 'Inscribirse Ahora'}
            </button>
          </div>
        </div>
        <div className="p-8 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Contenido del Curso</h3>
            <ul className="space-y-3">
                {course.syllabus.map((item, index) => (
                    <li key={index} className="flex items-center text-slate-700">
                        <svg className="h-6 w-6 text-sky-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
