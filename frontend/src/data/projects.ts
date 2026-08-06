import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Emory Women’s Golf Web',
    role: 'Project Lead • Full-Stack Developer',
    dateRange: 'Nov 2025 – Present',
    description:
      'A full-stack platform that manages the Emory Women’s Golf points game, activities, and rewards.',
    image: '/projects/emory-womens-golf-website.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Bootstrap',
      'Python',
      'REST APIs',
      'FastAPI',
      'Firebase',
      'MongoDB',
    ],
    overviewUrl:
      'https://docs.google.com/document/d/1yrsAPPZfhMUKJWmEBP_lcAnla5VPWmFQJXYCxwP100o/edit?usp=sharing',
    liveSiteUrl: 'https://ewgweb2.vercel.app/',
    githubUrl: 'https://github.com/Z1M000/EwgWeb2.0',
  },
  {
    id: '2',
    title: 'Customer Churn Prediction & Retention Analytics',
    role: 'Project Lead • Machine Learning Engineer',
    dateRange: 'Jan 2026 – Apr 2026',
    description:
      'An end-to-end machine learning project for predicting telecom customer churn and improving customer retention.',
    image: '/projects/churn-analytics.jpg',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    overviewUrl:
      'https://docs.google.com/document/d/1tMWLjx85BpR4P30qFppggqni7VE4ZMJINLuvqJ9QyJ0/edit?usp=sharing',
    githubUrl: 'https://github.com/Z1M000/Analyzing-Customer-Churn',
  },
  {
    id: '3',
    title: 'DooleyHelpz',
    role: 'Database Lead • Backend Developer',
    dateRange: 'Aug 2025 – Dec 2025',
    description:
      'A course planning platform that automatically generates personalized semester schedules for Emory CS students.',
    image: '/projects/dooleyhelpz.jpg',
    technologies: ['Python', 'MongoDB'],
    demoUrl: 'https://www.youtube.com/watch?v=Lw8Dgwb5xEs',
    githubUrl: 'https://github.com/MarcoGuzBal/DooleyHelpz',
  },
]
