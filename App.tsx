import React, { useState } from 'react';
import { Page, Course } from './types';
import { COURSES } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CourseDetailPage from './components/CourseDetailPage';
import MyCoursesPage from './components/MyCoursesPage';
import MethodologyPage from './components/MethodologyPage';
import NuestraEscuelaPage from './components/NuestraEscuelaPage';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  const handleEnroll = (courseId: number) => {
    if (enrolledCourses.includes(courseId)) return;
    setEnrolledCourses(prev => [...prev, courseId]);
    const course = COURSES.find(c => c.id === courseId);
    console.log(`User enrolled in course: "${course?.title}" (ID: ${courseId})`);
  };

  const handleViewDetails = (courseId: number) => {
    setSelectedCourseId(courseId);
    setPage('courseDetail');
  };

  const selectedCourse = COURSES.find(c => c.id === selectedCourseId);
  const userEnrolledCourses = COURSES.filter(c => enrolledCourses.includes(c.id));

  const renderPage = () => {
    switch (page) {
      case 'courseDetail':
        if (selectedCourse) {
          return (
            <CourseDetailPage
              course={selectedCourse}
              onEnroll={handleEnroll}
              isEnrolled={enrolledCourses.includes(selectedCourse.id)}
              onBack={() => setPage('home')}
            />
          );
        }
        return null;
      case 'myCourses':
        return <MyCoursesPage enrolledCourses={userEnrolledCourses} onViewDetails={handleViewDetails} />;
      case 'methodology':
        return <MethodologyPage onNavigateNuestraEscuela={() => setPage('nuestraEscuela')} />;
      case 'nuestraEscuela':
        return <NuestraEscuelaPage />;
      case 'home':
      default:
        return <HomePage onViewDetails={handleViewDetails} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onNavigateHome={() => setPage('home')}
        onNavigateMyCourses={() => setPage('myCourses')}
        onNavigateMethodology={() => setPage('methodology')}
        onNavigateNuestraEscuela={() => setPage('nuestraEscuela')}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;