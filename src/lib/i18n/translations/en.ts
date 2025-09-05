export const en = {
  nav: {
    about: 'About Me',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    testimonials: 'Testimonials',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm a",
    role: 'Developer',
    description:
      'I create exceptional digital experiences by combining elegant design with clean code. Specialized in modern web development and innovative solutions.',
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
    subtitle: 'My professional journey and most notable achievements',
    jobs: [
      {
        title: 'Senior Frontend Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Present',
        description:
          'I lead the development of modern web applications using React and Next.js. I implemented improvements that increased loading speed by 40%.',
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Agency',
        period: '2020 - 2022',
        description:
          'I developed complete applications from frontend to backend. I worked with multidisciplinary teams on large-scale projects.',
      },
      {
        title: 'Junior Developer',
        company: 'Innovative StartUp',
        period: '2019 - 2020',
        description:
          'I started my professional career developing features for a SaaS platform. I learned agile development best practices.',
      },
    ],
  },
  education: {
    title: 'Education',
    subtitle: 'My academic background and certifications',
    degrees: [
      {
        degree: 'Systems Engineering',
        school: 'Corporation of Technological Studies of Norte del Valle, Cartago',
        type: 'Systems Engineering',
        year: '2024 - Present',
        image: '/university-diploma-certificate.png',
        description:
          'Specialization in software development and systems architecture, focused on creating efficient, scalable, and secure solutions.',
        skills: ['Programming', 'Database Design', 'Software Architecture', 'Project Management'],
        downloadUrl: '#',
      },
      {
        degree: 'Software Analysis and Development',
        school: 'SENA, Cartago',
        type: 'Technical / Technological',
        year: '2022 - 2024',
        image: '/sena-certificate.png',
        description:
          'Intensive program in modern web technologies and agile methodologies, with a focus on full-stack development.',
        skills: ['JavaScript', 'React', 'Node.js', 'Agile Methodologies'],
        downloadUrl: '#',
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
