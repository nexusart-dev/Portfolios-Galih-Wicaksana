import { Project, Experience, Skill, NavItem, Certificate } from '@/types'

export const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Certificate', href: '#certificate' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Skills', href: '#skills' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
]

export const experiences: Experience[] = [
    {
        id: 1,
        year: "2021",
        role: "Scout Extracurricular Teacher",
        company: "SDN Gembongan | SDN Tanjungan | SDN Batankrajan | SMPN 1 Gedeg",
        duration: "Juni 2021 - Maret 2024",
    },
    {
        id: 2,
        year: "2024",
        role: "Marketing Intern",
        company: "PT Indo Bismar",
        duration: "April 2024 - June 2024",
    },
    {
        id: 3,
        year: "2023",
        role: "Public Administration & Service Staff Intern",
        company: "Kantor Kecamatan Ngusikan Kabupaten Jombang",
        duration: "August 2023 - November 2023",
    },
    {
        id: 4,
        year: "2024",
        role: "Salesforce Developer",
        company: "PT United Tractors Tbk",
        duration: "August 2024 - December 2024",
    },
    {
        id: 5,
        year: "2025",
        role: "Frontend Developer",
        company: "PT United Tractors",
        duration: "January 2025 - Present",
    },
]

export const certificate: Certificate[] = [
    {
        id: 1,
        title: 'Roots Training (Unicef)',
        date: '5 November 2021',
        image: '/certificates/roots.jpg',
        description: 'Certificate',
    },
    {
        id: 2,
        title: 'Indonesian Leadership Camp',
        date: 'Mei 2022',
        image: '/certificates/ilcamp.jpg',
        description: 'Certificate',
    },
    {
        id: 3,
        title: 'Saka Bhayangkara',
        date: '24 October 2023',
        image: '/certificates/sakapanitia.jpg',
        description: 'Certificate',
    },
    {
        id: 4,
        title: 'Saka Bhayangkara',
        date: '24 October 2023',
        image: '/certificates/sakapemateri.jpg',
        description: 'Certificate',
    },
    {
        id: 5,
        title: 'PT INDO BISMAR (PKL)',
        date: '03 June 2023',
        image: '/certificates/pkl.jpg',
        description: 'Certificate',
    },
    {
        id: 6,
        title: 'Penilaian PKL (PT INDO BISMAR)',
        date: '03 June 2023',
        image: '/certificates/pklnilai.jpg',
        description: 'Certificate',
    },
    {
        id: 7,
        title: 'Seminar Literasi Digital (Kominfo)',
        date: '26 February 2024',
        image: '/certificates/kominfo.jpg',
        description: 'Certificate',
    },
    {
        id: 8,
        title: 'Pemrograman dengan Dart (Dicoding)',
        date: '03 October 2024',
        image: '/certificates/flutter.jpg',
        description: 'Certificate',
    },
]

export const projects: Project[] = [
    {
        id: 1,
        title: 'My Portfolio',
        description: 'A personal portfolio website showcasing my projects, skills and experience as a developer, visitors can explore my work and journey in software development.',
        technologies: ['Next.js', 'Typescript', 'Material UI', 'Lotties', 'Parallax', 'Uiverse.io'],
        // githubUrl: 'https://github.com/username/project1',
        // liveUrl: 'https://project1.demo.com',
        image: '/images/project0.jpg',
    },
    {
        id: 2,
        title: 'AEPD',
        description: 'AEPD is a dashboard showing Komatsu product specs, performance, and market positioning versus competitors for product development insights.',
        technologies: ['React', 'Typescript', 'Tanstack Router', 'Material UI', 'Kubb', 'Recharts', 'react-jvectormap/core'],
        // githubUrl: 'https://github.com/username/project1',
        // liveUrl: 'https://project2.demo.com',
        image: '/images/project1.jpg',
    },
    {
        id: 3,
        title: 'Linear MSPP',
        description: 'Management Service Plan Performance is a dashboard CSM tool for auditing and improving customer maintenance management.',
        technologies: ['React', 'TypeScript', 'React Router Dom', 'Tailwind', 'UI-Shadcn', 'Leaflet', 'Open Street Map'],
        // githubUrl: 'https://github.com/username/project2',
        // liveUrl: 'https://project3.demo.com',
        image: '/images/project2.jpg',
    },
    {
        id: 4,
        title: 'E-PKPS',
        description: 'E-PKPS is a web application that speeds up the process of submitting, analyzing, and approving PKPS credit, resulting in more efficient decisions and optimal customer service.',
        technologies: ['Next.js', 'TypeScript', 'Tanstack Router', 'Material UI', 'Kubb'],
        // githubUrl: 'https://github.com/username/project2',
        // liveUrl: 'https://project4.demo.com',
        image: '/images/project3.jpg',
    },
    {
        id: 5,
        title: 'U-Tracking',
        description: 'E-PKPS is a web application that speeds up the process of submitting, analyzing, and approving PKPS credit, resulting in more efficient decisions and optimal customer service.',
        technologies: ['Next.js', 'TypeScript', 'Tanstack Router', 'Parse', 'Material UI'],
        // githubUrl: 'https://github.com/username/project2',
        // liveUrl: 'https://project5.demo.com',
        image: '/images/project4.jpg',
    },
]

export const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React', level: 88, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'MongoDB', level: 75, category: 'backend' },
]

export const tools = [
    { name: "MuleSoft", logo: "/tools/mulesoft.png" },
    { name: "Salesforce", logo: "/tools/salesforce.png" },
    { name: "Apex", logo: "/tools/salesforceapex.png" },
    { name: "React", logo: "/tools/react.png" },
    { name: "Laravel", logo: "/tools/laravel.png" },
    { name: "Kubb", logo: "/tools/kubb.png" },
    { name: "Next.js", logo: "/tools/nextjs.png" },
    { name: "TypeScript", logo: "/tools/typescript.png" },
    { name: "Tailwind", logo: "/tools/tailwind.png" },
    { name: "Node.js", logo: "/tools/nodejs.png" },
    { name: "GitHub", logo: "/tools/githubs.png" },
    { name: "VS Code", logo: "/tools/vscode.png" },
    { name: "TansStack", logo: "/tools/tanstack.png" },
    { name: "LottieFiles", logo: "/tools/lottiefiles.png" },
]