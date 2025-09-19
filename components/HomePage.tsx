import React, { useState } from 'react';
import { Level } from '../types';
import { COURSES } from '../constants';
import Hero from './Hero';
import CourseLevelTabs from './CourseLevelTabs';
import CourseCard from './CourseCard';

interface HomePageProps {
  onViewDetails: (courseId: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onViewDetails }) => {
  const [activeLevel, setActiveLevel] = useState<Level>(Level.Principiante);

  const filteredCourses = COURSES.filter(course => course.level === activeLevel);

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CourseLevelTabs activeLevel={activeLevel} onSelectLevel={setActiveLevel} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
