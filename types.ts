// Fix: Import `ReactNode` to solve for "Cannot find namespace 'JSX'".
// The JSX namespace is not available in `.ts` files. `ReactNode` is a more
// appropriate type for React elements passed as props.
import type { ReactNode } from 'react';

export enum Level {
  Principiante = 'Principiante',
  Intermedio = 'Intermedio',
  Académico = 'Académico',
  Masterclass = 'Masterclass',
}

export type Page = 'home' | 'courseDetail' | 'myCourses' | 'methodology' | 'nuestraEscuela';

export interface Course {
  id: number;
  title: string;
  description: string;
  level: Level;
  imageUrl: string;
  instructor: string;
  syllabus: string[];
}

export interface CourseLevel {
  id: Level;
  name: string;
  description: string;
  icon: ReactNode;
}