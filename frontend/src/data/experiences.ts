import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: '1',
    dateRange: 'Sep 2026 – Present',
    role: 'Software Engineering Intern',
    organization: 'Tuilink',
    location: 'Remote',
    bullets: [
      'Developing two LangGraph multi-agent services: AI Auto Reply and JD–Resume Matcher',
      'Designing structured communication between AI agents using Pydantic models and stateless JSON workflows to reduce debugging time and OpenAI token costs',
    ],
    technologies: [
      'Python',
      'TypeScript',
      'LangGraph',
      'Pydantic',
      'OpenAI API',
      'AWS Lambda',
      'API Gateway',
      'AWS CDK',
    ],
  },
  {
    id: '2',
    dateRange: 'Jun 2026 – Sep 2026',
    role: 'Software Engineering Research Intern',
    organization: 'Emory University',
    location: 'Remote',
    bullets: [
      'Integrated 5 open-source clone detectors into a unified benchmark to evaluate performance on LLM-rewritten repositories',
      'Developed adapters to standardize detector outputs for cross-detector evaluation',
      'Implemented token-based clone detection scoring using detected-to-total token ratios',
    ],
    technologies: ['Python', 'Java', 'Docker', 'Git', 'Linux', 'AWS'],
  },
  {
    id: '3',
    dateRange: 'Dec 2025 – Feb 2026',
    role: 'Web Development Intern',
    organization: 'Emory University',
    location: 'Atlanta, GA (Hybrid)',
    bullets: [
      'Built a frontend platform for researchers to explore 21 continuous glucose monitoring datasets with previews and filters, achieving 89% positive ratings for ease of dataset discovery in an 18-person user study',
      'Computed glucose distributions across 5 clinical ranges for visualization, helping 78% of researchers assess dataset suitability',
    ],
    technologies: ['React', 'TypeScript', 'Bootstrap', 'Python'],
  },
  {
    id: '4',
    dateRange: 'May 2025 – Aug 2025',
    role: 'Software Engineering Research Intern (NSF REU)',
    organization: 'Emory University',
    location: 'Remote',
    bullets: [
      'Implemented paper ingestion pipelines for a ~250M-paper AI-powered literature review platform',
      'Integrated OpenAlex, Crossref, and Semantic Scholar APIs to extract citation metadata for citation graph construction',
      'Optimized Semantic Scholar API retrieval with batch requests, reducing HTTP requests by 98.7% (451 → 6) and observed runtime by 99.9% (40.1 min → 3.21s) while improving paper processing success rate from 60% to 100% in a 5-paper live run',
      'Automated Gemini prompt construction, structured output generation, and DOI mapping to build ground truth for benchmarking RAG retrieval methods',
    ],
    technologies: ['Python', 'REST APIs', 'Gemini API', 'LanceDB'],
  },
]
