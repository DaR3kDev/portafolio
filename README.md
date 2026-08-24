# Portafolio Profesional

Bienvenido a mi portafolio profesional.

Este proyecto presenta mi **experiencia, trayectoria, proyectos y habilidades como desarrollador de software**, con un enfoque en la construcción de aplicaciones modernas, escalables, mantenibles y centradas en una buena experiencia de usuario.

El portafolio reúne información sobre mi perfil profesional, tecnologías que manejo, proyectos destacados y diferentes formas de contacto.

---

## Características

- Presentación de experiencia profesional.
- Proyectos destacados y trabajos realizados.
- Tecnologías y herramientas utilizadas.
- Diseño completamente responsive.
- Interfaz moderna, minimalista y profesional.
- Optimización para rendimiento y velocidad.
- Despliegue orientado a producción.
- Información de contacto profesional.

---

## Vista Mobile

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/bc2b0624-71f6-410d-9c28-47c6c487dd12"
    alt="Vista móvil del portafolio"
    width="300"
  />
</p>

---

## Vista Escritorio

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/cc24fc15-ab57-4656-beb5-61f2b168317c"
    alt="Vista de escritorio del portafolio"
    width="900"
  />
</p>

---

## Sobre el Proyecto

El portafolio fue desarrollado con un enfoque **minimalista, moderno y profesional**, priorizando una estructura clara y una experiencia de navegación sencilla.

La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla, permitiendo consultar el contenido cómodamente desde computadores, tablets y dispositivos móviles.

### Objetivos principales

- Mostrar mi experiencia profesional y trayectoria.
- Presentar proyectos personales y profesionales.
- Dar a conocer mis conocimientos técnicos.
- Mostrar las tecnologías con las que trabajo.
- Facilitar el contacto para oportunidades profesionales.
- Mantener una experiencia consistente en diferentes dispositivos.
- Aplicar buenas prácticas de desarrollo y organización del código.

---

## Perfil Profesional

Soy desarrollador de software orientado a la construcción de soluciones prácticas para problemas reales.

Mi experiencia se enfoca principalmente en el desarrollo **Backend y Full Stack**, trabajando con tecnologías del ecosistema **.NET, C#, React, TypeScript y bases de datos relacionales y no relacionales**.

Me interesa especialmente escribir código mantenible, diseñar soluciones escalables y trabajar en equipos donde exista colaboración, aprendizaje continuo y buenas prácticas de ingeniería de software.

---

## Tecnologías

### Frontend

- React
- TypeScript
- Astro
- Tailwind CSS
- HTML5
- CSS3
- Vite

### Backend

- C#
- .NET
- ASP.NET Core
- ASP.NET MVC
- REST APIs
- Node.js
- NestJS

### Bases de datos

- SQL Server
- PostgreSQL
- MongoDB
- Redis
- Entity Framework Core
- Prisma

### Infraestructura y herramientas

- Docker
- Docker Compose
- Git
- GitHub
- GitHub Actions
- Vercel
- Azure
- Postman

### Calidad y desarrollo

- Biome
- ESLint
- Prettier
- Conventional Commits
- Lefthook
- CI/CD

---

## Estructura General

El proyecto está organizado buscando mantener una separación clara entre componentes, páginas, recursos y lógica de la aplicación.

```text
portfolio/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── sections/
│   └── styles/
├── .gitignore
├── biome.json
├── lefthook.yml
├── package.json
├── tsconfig.json
└── README.md
```

> La estructura puede variar dependiendo de la versión actual del proyecto.

---

## Instalación

### Requisitos

Antes de ejecutar el proyecto necesitas tener instalado:

- Git
- Bun
- Node.js, si alguna dependencia o herramienta del proyecto lo requiere.

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
```

### 2. Entrar al proyecto

```bash
cd tu-repositorio
```

### 3. Instalar dependencias

```bash
bun install
```

### 4. Ejecutar en desarrollo

```bash
bun run dev
```

La aplicación estará disponible en la URL local indicada por el servidor de desarrollo.

---

## Calidad de Código

El proyecto utiliza **Biome** para mantener estándares consistentes de formato y calidad del código.

También se utilizan hooks de Git mediante **Lefthook** para realizar verificaciones automáticamente durante el flujo de desarrollo.

### Verificar el proyecto

```bash
bun run check
```

### Corregir automáticamente

```bash
bun run check:write
```

### Formatear el proyecto

```bash
bun run format
```

### Ejecutar lint

```bash
bun run lint
```

Los hooks también ejecutan verificaciones automáticamente antes de realizar commits y pushes.

---

## Git Hooks

El proyecto utiliza Lefthook para automatizar las validaciones.

### Pre-commit

Antes de crear un commit, Biome analiza los archivos modificados y puede aplicar correcciones automáticamente.

```text
git commit
    ↓
Lefthook
    ↓
Biome
    ↓
Correcciones automáticas
    ↓
Stage de archivos corregidos
    ↓
Commit
```

### Pre-push

Antes de enviar cambios al repositorio remoto, Biome realiza una validación sin modificar los archivos.

```text
git push
    ↓
Lefthook
    ↓
Biome
    ↓
Validación
    ↓
Push permitido / rechazado
```

Esto ayuda a evitar que código con problemas de formato o calidad llegue al repositorio remoto.

---

## Producción

El proyecto está preparado para ser desplegado en plataformas modernas de hosting.

Actualmente se utiliza:

- **Vercel** para despliegue.
- **GitHub** para control de versiones y colaboración.

El flujo de despliegue puede integrarse con CI/CD para automatizar las validaciones y publicaciones de nuevas versiones.

---

## Mejoras y Evolución

Este proyecto se encuentra en evolución constante.

Algunas mejoras que pueden incorporarse progresivamente:

- Mejoras de accesibilidad.
- Optimización adicional de rendimiento.
- SEO avanzado.
- Analítica de visitas.
- Nuevos proyectos y experiencias profesionales.
- Nuevas animaciones e interacciones.
- Mejoras en responsive design.
- Automatización del proceso de CI/CD.
- Pruebas automatizadas.

---

## Contacto

Si deseas conocer más sobre mi experiencia, proyectos o posibilidades de colaboración, puedes encontrar mis perfiles profesionales y medios de contacto dentro del portafolio.

**GitHub:**
https://github.com/DaR3kDev

**LinkedIn:**
https://www.linkedin.com/in/kevin-villegas-666bb61ab/

**Portafolio:**
https://portafolio-opal-beta-55.vercel.app/

---

## Licencia

Este proyecto corresponde a un **portafolio personal y profesional**.

El código puede ser consultado como referencia para fines educativos o de aprendizaje, pero el contenido personal, información profesional, diseños, textos, imágenes y demás recursos asociados al portafolio no deben ser reutilizados o presentados como propios sin autorización.

---

## Créditos

Desarrollado por **Kevin Andrés Villegas Pérez**.

Construido con tecnologías modernas y buenas prácticas de desarrollo de software.
