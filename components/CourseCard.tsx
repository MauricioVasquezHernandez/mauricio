import React from 'react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onViewDetails: (courseId: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img className="w-full h-56 object-cover" src={course.imageUrl} alt={course.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-slate-800">{course.title}</h3>
        <p className="text-slate-600 flex-grow">{course.description}</p>
        <button
          onClick={() => onViewDetails(course.id)}
          className="mt-6 font-bold py-2 px-4 rounded-lg self-start transition-colors duration-300 bg-amber-500 text-white hover:bg-amber-600"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
