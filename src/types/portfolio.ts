export interface PersonalInfo {
  name: string
  title: string
  headline: string
  email: string
  location: string
  github: string
  githubUsername: string
  avatarUrl?: string
  statusBadge: {
    active: boolean
    label: string
  }
  bioShort: string
  bioDetailed: string[]
  coreFocusAreas: {
    title: string
    description: string
    icon: string
  }[]
  metrics: {
    value: string
    label: string
    sublabel: string
  }[]
}

export interface MetricItem {
  metric: string
  label: string
}

export interface DigitalTransformationCase {
  id: string
  title: string
  domain: string
  scope: string
  badge: string
  summary: string
  challenge: string
  architectureSolution: string
  keyArchitectures: string[]
  techStack: string[]
  metrics: MetricItem[]
  featured: boolean
}

export interface ResearchPaper {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  status: 'Published' | 'Under Review' | 'Accepted' | 'Preprint' | 'Working Paper'
  abstract: string
  keywords: string[]
  bibtex: string
  pdfUrl?: string
  doi?: string
  codeUrl?: string
  topics: string[]
}

export interface EngineeringProject {
  id: string
  name: string
  tagline: string
  badge: string
  category: 'Developer Tools' | 'Web Extension' | 'Automation & AI' | 'Productivity'
  description: string
  keyFeatures: string[]
  techStack: string[]
  githubUrl: string
  demoUrl?: string
  terminalSnippet?: string
  starredCount?: string
}

export interface SkillItem {
  name: string
  level?: string
  tags?: string[]
}

export interface SkillGroup {
  category: string
  title: string
  icon: string
  description: string
  skills: SkillItem[]
  highlightedTechnologies: string[]
}

export interface TimelineEntry {
  id: string
  period: string
  title: string
  organization: string
  location: string
  type: 'academic' | 'engineering' | 'research'
  summary: string
  points: string[]
  tags: string[]
  isCurrent?: boolean
}

export interface NavItem {
  id: string
  label: string
  href: string
  icon: string
}
