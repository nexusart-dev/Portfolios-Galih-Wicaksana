export interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    image: string
}

export interface Experience {
    id: number
    year: string
    role: string
    company: string
    duration: string
}

export interface Certificate {
    id: number
    title: string
    date: string
    image: string
    description: string
}

export interface Skill {
    name: string
    level: number
    category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface NavItem {
    label: string
    href: string
}