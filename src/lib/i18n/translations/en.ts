export const en = {
  nav: {
    about: 'About Me',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
  },
  hero: {
    greeting: 'Hey! I’m Kevin 👋',
    role: 'Systems Engineer | Fullstack Developer',
    description:
      'I love building software with clean architecture and clear code, always aiming for solutions that truly help people.',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
  },
  about: {
    title: 'About Me',
    subtitle: 'Learn more about my journey and passion for development',
    description1:
      "I'm a passionate developer with over 5 years of experience creating innovative digital solutions. My focus is on writing clean, scalable code and maintaining development best practices.",
    description2:
      'I specialize in modern technologies like React, Next.js, TypeScript, and Node.js. I enjoy working in collaborative teams and am always looking for new challenges that allow me to grow professionally.',
    location: 'Madrid, Spain',
    availability: 'Available for projects',
  },
  experience: {
    title: 'Professional Experience',
    subtitle: 'My career journey',
    jobs: [
      {
        title: 'Backend Developer',
        company: 'Softtek',
        period: 'Apr 2025 – Present',
        description:
          'Support and maintenance of production systems built on legacy code, along with user documentation for non-technical audiences.',
      },
      {
        title: 'Backend Developer',
        company: 'Colombiana de Accesorios',
        period: 'Feb 2024 – Feb 2025',
        description:
          'Migrated and modernized ERP modules in .NET, optimized SQL queries, and improved inventory and sales workflows.',
      },
    ],
  },

  education: {
    title: 'Education',
    subtitle: 'My academic background and certifications',
    degrees: [
      {
        id: 1,
        title: 'Systems Engineering',
        institution: 'Corporación de Estudios Tecnológicos del Norte del Valle, Cartago',
        type: 'Bachelor’s Degree',
        year: '2024 - Present',
        image: '',
        description:
          'Focused on software development and systems architecture, oriented to building efficient, scalable, and secure solutions.',
        skills: ['Programming', 'Database Design', 'Software Architecture', 'Project Management'],
        downloadUrl: '#',
      },
      {
        id: 2,
        title: 'Software Analysis and Development',
        institution: 'SENA, Cartago',
        type: 'Technologist',
        year: '2022 - 2024',
        image: '/img/certificacion-software.webp',
        description:
          'Intensive program in modern web technologies and agile methodologies, with emphasis on full-stack development.',
        skills: ['JavaScript', 'React', 'Node.js', 'Agile Methodologies'],
        downloadUrl:
          '',
      },
      {
        id: 3,
        title: 'Administration of Network Services in GNU/Linux Operating Systems',
        institution: 'SENA, Cartago',
        type: 'Course',
        year: '2022',
        image: '/img/certificacion-server-linux.webp',
        description:
          'Management and administration of Linux servers, network configuration, and service deployment in production environments.',
        skills: ['Linux', 'Ubuntu'],
        downloadUrl:
          'https://drive.google.com/drive/folders/1FHCNx6FlG7yFDDyGyM1Y5YA6M-1Nivrx?dmr=1&ec=wgc-drive-globalnav-goto',
      },
      {
        id: 4,
        title: 'CCNA Exploration - Networking Fundamentals',
        institution: 'SENA, Cartago',
        type: 'Course',
        year: '2022',
        image: '/img/certificacion-ccna-exploration.webp',
        description:
          'Fundamental concepts of computer networks, Cisco device configuration, and basic connectivity principles.',
        skills: ['Cisco Networking'],
        downloadUrl:
          'https://drive.google.com/drive/folders/1FHCNx6FlG7yFDDyGyM1Y5YA6M-1Nivrx?dmr=1&ec=wgc-drive-globalnav-goto',
      },
      {
        id: 5,
        title: 'Server Virtualization',
        institution: 'SENA, Cartago',
        type: 'Course',
        year: '2022',
        image: '/img/certifiacion-virtualizacion-servidor.webp',
        description:
          'Implementation of virtualized environments, virtual machine management, and server resource optimization.',
        skills: ['VMware', 'Virtualization'],
        downloadUrl:
          'https://drive.google.com/drive/folders/1FHCNx6FlG7yFDDyGyM1Y5YA6M-1Nivrx?dmr=1&ec=wgc-drive-globalnav-goto',
      },
      {
        id: 6,
        title: 'English Dot Works 1',
        institution: 'SENA, Cartago',
        type: 'Language Course',
        year: '2022',
        image: '/img/certificado-ingles1.webp',
        description:
          'Introductory English course focused on basic grammar, vocabulary, and everyday communication skills.',
        skills: ['Basic English', 'Grammar', 'Vocabulary', 'Communication'],
        downloadUrl:
          'https://drive.google.com/drive/folders/1FHCNx6FlG7yFDDyGyM1Y5YA6M-1Nivrx?dmr=1&ec=wgc-drive-globalnav-goto',
      },
      {
        id: 7,
        title: 'Basic English - Level 3',
        institution: 'SENA, Cartago',
        type: 'Language Course',
        year: '2022',
        image: '/img/certificado-ingles-basico3.webp',
        description:
          'English course aimed at strengthening listening, reading, and speaking skills at the A2 level.',
        skills: ['English A2', 'Listening', 'Reading', 'Speaking'],
        downloadUrl:
          'https://drive.google.com/drive/folders/1FHCNx6FlG7yFDDyGyM1Y5YA6M-1Nivrx?dmr=1&ec=wgc-drive-globalnav-goto',
      },
    ],
  },
  projects: {
    title: 'Featured Projects',
    subtitle: 'A selection of my most recent and significant works',
    items: [
      {
        title: 'E-commerce Platform',
        description:
          'A complete e-commerce platform with shopping cart, payments, and inventory management.',
        slug: 'ecommerce-platform',
        image: '/modern-ecommerce-interface.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        category: 'web',
        link: '/projects/ecommerce-platform',
        detailedInfo: {
          problems: 'Users could not update the shopping cart in real-time efficiently.',
          solutions:
            'Implemented global state management with Redux and synchronized with the database via WebSockets.',
          learnings: 'Learned how to handle complex states and real-time updates in React.',
          additionalNotes: 'Optimized image loading and improved payment security with Stripe.',
        },
      },
      {
        title: 'Task Management App',
        description:
          'Task management application with real-time collaboration and progress tracking.',
        slug: 'task-management-app',
        image: '/task-management-dashboard.png',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
        github: '#',
        category: 'web',
        link: '/projects/task-management-app',
        detailedInfo: {
          problems: 'Real-time synchronization between users caused data conflicts.',
          solutions: 'Integrated WebSockets with task version control and temporary locks.',
          learnings:
            'Understood the importance of concurrency and consistency in collaborative apps.',
          additionalNotes: 'Implemented filters and productivity reports to enhance UX.',
        },
      },
      {
        title: 'Weather Dashboard',
        description: 'Weather dashboard with detailed forecasts and interactive visualizations.',
        slug: 'weather-dashboard',
        image: '/preview/project4.png',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        github: '#',
        category: 'frontend',
        link: '/projects/weather-dashboard',
        detailedInfo: {
          problems: 'The weather API limited the number of calls, causing frequent errors.',
          solutions: 'Implemented caching of results and error handling with user notifications.',
          learnings: 'Learned to optimize external API requests and improve UX during errors.',
          additionalNotes: 'Designed interactive charts with Chart.js for better visualization.',
        },
      },
      {
        title: 'Another Project',
        description: 'Example of another project',
        slug: 'another-project',
        image: '/preview/project4.png',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        github: '#',
        category: 'frontend',
        link: '/projects/another-project',
        detailedInfo: {
          problems: 'Compatibility issues with older browsers.',
          solutions: 'Used polyfills and optimized CSS for compatibility.',
          learnings: 'Understood the importance of cross-browser testing.',
          additionalNotes: 'Added light/dark theme system to improve UX.',
        },
      },
      {
        title: 'Backend API',
        description: 'Example backend',
        slug: 'backend-api',
        image: '',
        technologies: ['NestJS', 'Prisma', 'PostgreSQL'],
        github: '#',
        category: 'backend',
        link: '/projects/backend-api',
        detailedInfo: {
          problems: 'Initially, table relationships were complex and caused inconsistencies.',
          solutions: 'Redesigned the database schema with Prisma and optimized endpoints.',
          learnings:
            'Learned best practices for designing REST APIs and handling relational databases.',
          additionalNotes: 'Added authentication and data validation for better security.',
        },
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'Technologies and tools I master',
    level: 'Level',
    items: [
      { name: 'Frontend Development' },
      { name: 'UI/UX Design' },
      { name: 'Mobile Development' },
    ],
  },
  testimonials: {
    title: 'Testimonials',
    subtitle: 'What my colleagues and clients say about my work',
    items: [
      {
        name: 'María González',
        role: 'Product Manager',
        company: 'Tech Solutions Inc.',
        content:
          'Working with him has been exceptional. His attention to detail and ability to solve complex problems is impressive.',
      },
      {
        name: 'Carlos Rodríguez',
        role: 'CEO',
        company: 'Digital Agency',
        content:
          'A talented developer who always delivers high-quality projects on time. Highly recommended.',
      },
    ],
  },
  contact: {
    title: "Let's Work Together",
    subtitle: "Have a project in mind? I'd love to hear your ideas",
    formTitle: 'Contact Me',
    formSubtitle: "Send me a message and I'll get back to you as soon as possible",
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project...',
    send: 'Send Message',
  },
  footer: {
    rights: '© 2024 My Portfolio. All rights reserved.',
  },
}
