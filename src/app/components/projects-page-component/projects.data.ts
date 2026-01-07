export interface Project {
  slug: string;
  title: string;
  tech: string;
  image: string;
  summary: string;
  description: string[];
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'ecommerce',
    title: 'E-Commerce Platform',
    tech: 'Java · Spring Boot · Angular · CI/CD',
    image: 'assets/Images/ecommerce.png',
    summary: 'A scalable e-commerce platform built for real-world business needs.',
    description: [
      'Designed and implemented a full-stack e-commerce system.',
      'Secure role-based backoffice using Spring Security.',
      'CI/CD pipelines for automated testing and deployment.'
    ],
    highlights: [
      'Modular microservice-friendly architecture',
      'Secure authentication and authorization',
      'Optimized for performance under load'
    ]
  },
  {
    slug: 'decebalus',
    title: 'Rust Cybersecurity Tool',
    tech: 'Rust · Networking · CLI · Security',
    image: 'assets/Images/decebalus.png',
    summary: 'High-performance cybersecurity tooling written in Rust.',
    description: [
      'Built a modular CLI tool for network reconnaissance.',
      'Designed for concurrency, safety, and extensibility.',
      'Inspired by professional red-team workflows.'
    ],
    highlights: [
      'Memory-safe concurrency',
      'Extensible plugin architecture',
      'Designed for large-scale networks'
    ]
  },
  {
    slug: 'nonprofit',
    title: 'Non-Profit Community Mobile App',
    tech: 'Java · Spring Boot · REST APIs · JWT Auth',
    image: 'assets/Images/nonprofit.png',
    summary: 'Backend system for a community-focused mobile application supporting non-profit engagement and communication.',
    description: [
      'Designed and developed a secure Spring Boot backend to support a community mobile application for a non-profit organisation.',
      'Implemented RESTful APIs for announcements, events, and member interactions, ensuring clean separation of concerns and scalability.',
      'Focused on reliability, concurrency handling, and maintainability to support future feature growth and increased user activity.',
      'Worked closely with stakeholders to translate community needs into technical solutions.'
    ],
    highlights: [
      'Secure authentication and authorization using JWT',
      'Scalable REST API architecture designed for mobile clients',
      'Clean modular backend structure following Spring best practices',
      'Built with future extensibility in mind for new community features'
    ]
  }
];
