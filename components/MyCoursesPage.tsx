import React from 'react';
import { Course } from '../types';
import CourseCard from './CourseCard';

interface MyCoursesPageProps {
  enrolledCourses: Course[];
  onViewDetails: (courseId: number) => void;
}

const MyCoursesPage: React.FC<MyCoursesPageProps> = ({ enrolledCourses, onViewDetails }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-slate-800 mb-10 text-center">Mis Cursos Inscritos</h2>
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enrolledCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-12 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-slate-700">Aún no te has inscrito a ningún curso.</h3>
            <p className="text-slate-500 mt-2">¡Explora nuestro catálogo y comienza tu viaje de aprendizaje hoy!</p>
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage;
