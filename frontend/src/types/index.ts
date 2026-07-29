export interface Experience {
  id: string
  dateRange: string
  role: string
  organization: string
  location: string
  bullets: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  role: string
  dateRange: string
  description: string
  image: string
  technologies: string[]
  overviewUrl?: string
  liveSiteUrl?: string
  demoUrl?: string
  githubUrl?: string
}

export interface ContactInfo {
  message: string
  phone: string
  email: string
  linkedInUrl: string
  githubUrl: string
}
