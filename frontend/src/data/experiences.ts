import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: '1',
    dateRange: 'Jun 2026 – Present',
    role: 'Software Engineering Research Intern',
    organization: 'Emory University',
    location: 'Remote',
    bullets: [
      'Integrate and validate 5 open-source clone detectors to benchmark repository-level LLM-generated code rewrites using Linux and Docker',
      'Standardize detector interfaces and evaluation workflows within a common benchmarking pipeline',
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
      'Implemented ingestion pipelines for ~250M academic papers and extracted multi-source citation data to support an AI-powered literature review platform',
      'Developed LLM-based benchmarks leveraging Gemini-generated reference answers to compare retrieval strategies for paper discovery and summarization',
      'Automated the download, conversion, and upload of 20K+ medical imaging samples from CT-RATE into the M3D format for downstream AI medical research',
    ],
    technologies: ['Python', 'REST APIs', 'LanceDB', 'Hugging Face'],
  },
]
