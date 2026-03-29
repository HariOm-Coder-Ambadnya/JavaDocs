export interface Course {
  id: string
  iconName: 'Coffee' | 'Puzzle' | 'Leaf' | 'Rocket' | 'Database' | 'Layout' | 'ShieldCheck'
  title: string
  color: string
  bg: string
  lessons: number
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  desc: string
  tags: string[]
}

export const COURSES: Course[] = [
  {
    id: 'java', iconName: 'Coffee', title: 'Java Fundamentals',
    color: '#ffffff', bg: 'rgba(255,255,255,0.08)',
    lessons: 12, duration: '8h 30m', level: 'Beginner',
    desc: 'Master variables, data types, loops, arrays, methods & the Collections framework.',
    tags: ['Variables', 'Loops', 'Methods', 'Collections'],
  },
  {
    id: 'oop', iconName: 'Puzzle', title: 'OOP Concepts',
    color: '#a855f7', bg: 'rgba(168,85,247,0.1)',
    lessons: 8, duration: '6h 15m', level: 'Beginner',
    desc: 'Understand encapsulation, inheritance, polymorphism, abstraction and interfaces.',
    tags: ['Encapsulation', 'Inheritance', 'Polymorphism'],
  },
  {
    id: 'spring', iconName: 'Leaf', title: 'Spring Framework',
    color: '#22c55e', bg: 'rgba(34,197,94,0.1)',
    lessons: 10, duration: '10h 00m', level: 'Intermediate',
    desc: 'Deep dive into IoC, Dependency Injection, Beans configuration and Spring MVC.',
    tags: ['IoC', 'DI', 'Beans', 'MVC'],
  },
  {
    id: 'springboot', iconName: 'Rocket', title: 'Spring Boot',
    color: '#3b82f6', bg: 'rgba(59,130,246,0.1)',
    lessons: 11, duration: '12h 45m', level: 'Intermediate',
    desc: 'Build REST APIs with auto-configuration, validation and exception handling.',
    tags: ['REST', 'AutoConfig', 'Validation'],
  },
  {
    id: 'jpa', iconName: 'Database', title: 'JPA / Hibernate',
    color: '#ec4899', bg: 'rgba(236,72,153,0.1)',
    lessons: 9, duration: '9h 20m', level: 'Intermediate',
    desc: 'Work with entities, repositories, table relationships and JPQL queries.',
    tags: ['Entities', 'Repositories', 'JPQL'],
  },
  {
    id: 'frontend', iconName: 'Layout', title: 'Frontend Integration',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.1)',
    lessons: 6, duration: '7h 15m', level: 'Intermediate',
    desc: 'Connect your Spring backend to modern React.js frontends using Axios and state management.',
    tags: ['React', 'JavaScript', 'Fetch', 'State'],
  },
  {
    id: 'devops', iconName: 'ShieldCheck', title: 'Security & Deployment',
    color: '#ef4444', bg: 'rgba(239,68,68,0.1)',
    lessons: 7, duration: '9h 40m', level: 'Advanced',
    desc: 'Secure APIs with JWT, containerize with Docker, and deploy to the cloud via CI/CD.',
    tags: ['JWT', 'Docker', 'AWS', 'CI/CD'],
  },
]
