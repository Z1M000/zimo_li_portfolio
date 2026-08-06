import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: '1',
    dateRange: 'Jun 2026 – Present',
    role: 'Software Engineering Research Intern',
    organization: 'Emory University',
    location: 'Remote',
    bullets: [
      'Integrate and validate five open-source code clone detectors in Linux and Docker environments to benchmark their performance on repository-level, LLM-rewritten code',
      'Standardize clone detector interfaces and evaluation workflows within a common benchmarking pipeline',
    ],
    technologies: ['Python', 'Java', 'Docker', 'Git', 'Linux', 'AWS'],
  },
  {
    id: '2',
    dateRange: 'Dec 2025 – Feb 2026',
    role: 'Web Development Intern',
    organization: 'Emory University',
    location: 'Atlanta, GA (Hybrid)',
    bullets: [
      'Built a diabetes ML research platform for 20+ time-series glucose datasets with data preview and filtering features, improving data access efficiency and consistency for researchers',
      'Enabled rapid dataset profiling and cross-dataset comparison by visualizing glucose range percentages',
    ],
    technologies: ['React', 'TypeScript', 'Bootstrap', 'Python'],
  },
  {
    id: '3',
    dateRange: 'May 2025 – Aug 2025',
    role: 'Software Engineering Research Intern (NSF REU)',
    organization: 'Emory University',
    location: 'Remote',
    bullets: [
      'Extracted multi-source citation data using API and batch retrieval strategies and implemented ingestion pipelines for ~250M academic papers to support an AI-powered literature review platform',
      'Created Retrieval-Augmented Generation (RAG) evaluation ground truth with Gemini by selecting the most relevant references from each paper’s cited works based on its title and abstract',
      'Automated the download, conversion, and upload of 20K+ medical imaging samples from CT-RATE into the M3D format for downstream AI medical research',
    ],
    technologies: ['Python', 'REST APIs', 'Gemini API', 'LanceDB', 'Hugging Face'],
  },
]
