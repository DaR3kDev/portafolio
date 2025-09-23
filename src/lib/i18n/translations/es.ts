export const es = {
  nav: {
    about: 'Sobre Mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    skills: 'Habilidades',
    education: 'Educación',
  },
  hero: {
    greeting: 'Hey! Soy Kevin',
    role: 'Ingeniero en Sistemas | Desarrollador Fullstack',
    description:
      'Me encanta crear software con arquitectura limpia y código claro, siempre buscando soluciones que realmente ayuden a las personas.',
    viewProjects: 'Ver Proyectos',
    downloadCV: 'Descargar CV',
  },
  about: {
    title: 'Sobre Mí',
    subtitle: 'Conoce más sobre mi trayectoria y pasión por el desarrollo',
    description1:
      'Soy un desarrollador apasionado con más de 5 años de experiencia creando soluciones digitales innovadoras. Mi enfoque se centra en escribir código limpio, escalable y mantener las mejores prácticas de desarrollo.',
    description2:
      'Me especializo en tecnologías modernas como React, Next.js, TypeScript y Node.js. Disfruto trabajando en equipos colaborativos y siempre estoy buscando nuevos desafíos que me permitan crecer profesionalmente.',
    location: 'Madrid, España',
    availability: 'Disponible para proyectos',
  },
  experience: {
    title: 'Experiencia Profesional',
    subtitle: 'Mi trayectoria profesional',
    jobs: [
      {
        title: 'Desarrollador Backend',
        company: 'Softtek',
        period: 'Abr 2025 – Actualidad',
        description:
          'Soporte y mantenimiento de sistemas en producción basados en código legacy, además de documentación para usuarios no técnicos.',
      },
      {
        title: 'Desarrollador Backend',
        company: 'Colombiana de Accesorios',
        period: 'Feb 2024 – Feb 2025',
        description:
          'Migración y modernización de módulos ERP en .NET, optimización de consultas SQL y mejoras en inventario y flujo comercial.',
      },
    ],
  },

  education: {
    title: 'Educación',
    subtitle: 'Mi formación académica y certificaciones',
    degrees: [
      {
        id: 1,
        title: 'Ingeniería en Sistemas',
        institution: 'Corporación de Estudios Tecnológicos del Norte del Valle, Cartago',
        type: 'Pregrado',
        year: '2024 - Actualmente',
        image: '',
        description:
          'Formación enfocada en desarrollo de software y arquitectura de sistemas, orientada a crear soluciones eficientes, escalables y seguras.',
        skills: [
          'Programación',
          'Diseño de Bases de Datos',
          'Arquitectura de Software',
          'Gestión de Proyectos',
        ],
        downloadUrl: '#',
      },
      {
        id: 2,
        title: 'Análisis y Desarrollo de Software',
        institution: 'SENA, Cartago',
        type: 'Tecnólogo',
        year: '2022 - 2024',
        image: '/img/certificacion-software.webp',
        description:
          'Programa intensivo en tecnologías web modernas y metodologías ágiles, con énfasis en desarrollo full-stack.',
        skills: ['JavaScript', 'React', 'Node.js', 'Metodologías Ágiles'],
        downloadUrl: '/pdf/ANALISIS Y DESARROLLO DE SOFTWARE.pdf',
      },
      {
        id: 3,
        title: 'Administración de Servicios de Red en Sistemas Operativos GNU/Linux Server',
        institution: 'SENA, Cartago',
        type: 'Curso',
        year: '2022',
        image: '/img/certificacion-server-linux.webp',
        description:
          'Gestión y administración de servidores Linux, configuraciones de red y despliegue de servicios en entornos productivos.',
        skills: ['Linux', 'Ubuntu'],
        downloadUrl:
          '/pdf/ADMINISTRACION DE SERVICIOS DE RED EN SISTEMAS OPERATIVOS GNU-LINUX SERVER.pdf',
      },
      {
        id: 4,
        title: 'CCNA Exploration - Aspectos Básicos de Networking',
        institution: 'SENA, Cartago',
        type: 'Curso',
        year: '2022',
        image: '/img/certificacion-ccna-exploration.webp',
        description:
          'Fundamentos esenciales de redes de datos, configuración de dispositivos Cisco y conceptos básicos de conectividad.',
        skills: ['Cisco Networking'],
        downloadUrl: '/pdf/CCNA EXPLORATION - ASPECTOS BÁSICOS DE NETWORKING.pdf',
      },
      {
        id: 5,
        title: 'Virtualización de Servidores',
        institution: 'SENA, Cartago',
        type: 'Curso',
        year: '2022',
        image: '/img/certifiacion-virtualizacion-servidor.webp',
        description:
          'Implementación de entornos virtualizados, administración de máquinas virtuales y optimización de recursos en servidores.',
        skills: ['VMware', 'Virtualización'],
        downloadUrl: '/pdf/VIRTUALIZACION DE SERVIDORES.pdf',
      },
      {
        id: 6,
        title: 'English Dot Works 1',
        institution: 'SENA, Cartago',
        type: 'Curso de Idiomas',
        year: '2022',
        image: '/img/certificado-ingles1.webp',
        description:
          'Curso introductorio de inglés enfocado en gramática básica, vocabulario y habilidades de comunicación cotidiana.',
        skills: ['Inglés básico', 'Gramática', 'Vocabulario', 'Comunicación'],
        downloadUrl: '/pdf/ENGLISH DOT WORKS 1.pdf',
      },
      {
        id: 7,
        title: 'Inglés Básico - Nivel 3',
        institution: 'SENA, Cartago',
        type: 'Curso de Idiomas',
        year: '2022',
        image: '/img/certificado-ingles-basico3.webp',
        description:
          'Curso de inglés orientado a fortalecer las habilidades de escucha, lectura y expresión oral a nivel básico (A2).',
        skills: ['Inglés A2', 'Escucha', 'Lectura', 'Expresión oral'],
        downloadUrl: '/pdf/INGLES BASICO - NIVEL 3.pdf',
      },
    ],
  },
  projects: {
    title: 'Proyectos Destacados',
    subtitle: 'Una selección de mis trabajos más recientes y significativos',
    items: [
      {
        title: 'E-commerce Platform',
        description:
          'Una plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.',
        slug: 'ecommerce-platform',
        image: '/modern-ecommerce-interface.png',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: 'https://github.com/miusuario/ecommerce-platform',
        link: 'https://demo-ecommerce.com',
        category: 'web',
        detailedInfo: {
          problems:
            'Los usuarios no podían actualizar correctamente el carrito de compras en tiempo real.',
          solutions:
            'Implementé un estado global con Redux y sincronización con la base de datos usando WebSockets.',
          learnings:
            'Aprendí a manejar estados complejos y actualizaciones en tiempo real en React.',
          additionalNotes:
            'Optimicé la carga de imágenes y mejoré la seguridad de los pagos con Stripe.',
        },
      },
      {
        title: 'Task Management App',
        description:
          'Aplicación de gestión de tareas con colaboración en tiempo real y seguimiento de progreso.',
        slug: 'task-management-app',
        image: '/task-management-dashboard.png',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
        github: 'https://github.com/miusuario/task-management-app',
        link: 'https://demo-taskapp.com',
        category: 'web',
        detailedInfo: {
          problems: 'La sincronización en tiempo real entre usuarios generaba conflictos de datos.',
          solutions: 'Integré WebSockets con control de versiones de tareas y bloqueo temporal.',
          learnings:
            'Comprendí la importancia de la concurrencia y consistencia en apps colaborativas.',
          additionalNotes:
            'Implementé filtros y reportes de productividad para mejorar la experiencia.',
        },
      },
      {
        title: 'Weather Dashboard',
        description:
          'Dashboard meteorológico con pronósticos detallados y visualizaciones interactivas.',
        slug: 'weather-dashboard',
        image: '/preview/project4.png',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        github: 'https://github.com/miusuario/weather-dashboard',
        link: 'https://weather-dashboard-demo.com',
        category: 'frontend',
        detailedInfo: {
          problems: 'El API de clima no permitía muchas llamadas, causando errores frecuentes.',
          solutions:
            'Implementé caching de resultados y manejo de errores con notificaciones al usuario.',
          learnings: 'Aprendí a optimizar consultas externas y mejorar la UX ante errores de API.',
          additionalNotes: 'Diseñé gráficos interactivos usando Chart.js para mejor visualización.',
        },
      },
      {
        title: 'Otro proyecto',
        description: 'Ejemplo de otro proyecto',
        slug: 'otro-proyecto',
        image: '/preview/project4.png',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeather API'],
        github: 'https://github.com/miusuario/otro-proyecto',
        link: 'https://demo-otro-proyecto.com',
        category: 'frontend',
        detailedInfo: {
          problems: 'Problemas de compatibilidad con navegadores antiguos.',
          solutions: 'Utilicé polyfills y optimización de CSS para compatibilidad.',
          learnings: 'Comprendí la importancia del testing cross-browser.',
          additionalNotes: 'Incluí un sistema de temas claros y oscuros para mejorar la UX.',
        },
      },
      {
        title: 'Backend API',
        description: 'Ejemplo backend',
        slug: 'backend-api',
        image: '',
        technologies: ['NestJS', 'Prisma', 'PostgreSQL'],
        github: 'https://github.com/miusuario/backend-api',
        link: 'https://demo-backend-api.com',
        category: 'backend',
        detailedInfo: {
          problems:
            'Al principio, las relaciones entre tablas eran complejas y generaban inconsistencias.',
          solutions: 'Rediseñé el esquema de la base de datos con Prisma y optimicé los endpoints.',
          learnings:
            'Aprendí buenas prácticas de diseño de APIs REST y manejo de bases de datos relacionales.',
          additionalNotes: 'Agregué autenticación y validaciones de datos para mayor seguridad.',
        },
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Tecnologías y herramientas que domino',
    level: 'Nivel',
    items: [
      { name: 'Frontend Development' },
      { name: 'UI/UX Design' },
      { name: 'Mobile Development' },
    ],
  },
  testimonials: {
    title: 'Testimonios',
    subtitle: 'Lo que dicen mis colegas y clientes sobre mi trabajo',
    items: [
      {
        name: 'María González',
        role: 'Product Manager',
        company: 'Tech Solutions Inc.',
        content:
          'Trabajar con él ha sido excepcional. Su atención al detalle y capacidad para resolver problemas complejos es impresionante.',
      },
      {
        name: 'Carlos Rodríguez',
        role: 'CEO',
        company: 'Digital Agency',
        content:
          'Un desarrollador talentoso que siempre entrega proyectos de alta calidad a tiempo. Altamente recomendado.',
      },
    ],
  },
  contact: {
    title: 'Trabajemos Juntos',
    subtitle: '¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas',
    formTitle: 'Contáctame',
    formSubtitle: 'Envíame un mensaje y te responderé lo antes posible',
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Email',
    emailPlaceholder: 'tu@email.com',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre tu proyecto...',
    send: 'Enviar Mensaje',
  },
  footer: {
    rights: 'Mi Portafolio. Todos los derechos reservados.',
  },
}
