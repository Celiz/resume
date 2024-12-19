import {
    AmbitLogo,
    BarepapersLogo,
    BimLogo,
    CDGOLogo,
    ClevertechLogo,
    ConsultlyLogo,
    EvercastLogo,
    Howdy,
    JarockiMeLogo,
    JojoMobileLogo,
    Minimal,
    MobileVikingsLogo,
    MonitoLogo,
    NSNLogo,
    ParabolLogo,
    TastyCloudLogo,
    YearProgressLogo,
  } from "@/images/logos";
  import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
  
  export const RESUME_DATA = {
    name: "Matías Nicolás Celiz Ramos",
    initials: "MC",
    location: "Mar del Plata, Buenos Aires, Argentina, UTC-3",
    locationLink: "https://www.google.com/maps/place/Mar+del+Plata",
    about:
      "Full Stack Junior",
    summary:
      "Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales. Siempre tengo la mejor disposición para la realización de mis labores. Busco un puesto desafiante donde pueda continuar aprendiendo.",
    avatarUrl: "https://avatars.githubusercontent.com/u/82237565?v=4",
    personalWebsiteUrl: "https://celizin.dev.ar",
    contact: {
      email: "maticelizramos@gmail.com",
      tel: "+542235421371",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/Celiz",
          icon: GitHubIcon,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/celizm/",
          icon: LinkedInIcon,
        },
      ],
    },
    education: [
      {
        school: "Escuela de Educacion Secundaria Tecnica Nº5 Amancio Williams",
        degree: "Técnico en Informática Personal y Profesional",
        start: "2018",
        end: "2024",
      },
    ],
    work: [
      {
        company: "Grucar Remolques",
        link: "",
        badges: ["Remoto"],
        title: "Junior Full Stack Developer",
        logo: CDGOLogo,
        start: "Junio 2024",
        end: "Octubre 2024",
        description:
          "Participación integral en el desarrollo de un sistema interno para una empresa de grúas, abarcando tanto el diseño de la interfaz como su desarrollo. Tecnologías: Next.js, TypeScript, Tailwind CSS, Supabase (PostgreSQL)",
      },
      {
        company: "FinGuru",
        link: "http://cursos-staging.fin.guru/es",
        badges: ["Remoto"],
        title: "Junior Full Stack Developer",
        logo: MonitoLogo,
        start: "Marzo 2024",
        end: "Mayo 2024",
        description:
          "Implementación de nuevas características, integración de la API de Mercado Pago, desarrollo de endpoints para la gestión de reseñas de cursos. Tecnologías: React, TypeScript, Strapi, SCSS",
      },
      {
        company: "Tranqui",
        link: "https://tranqui.mdp.edu.ar/",
        badges: ["Presencial"],
        title: "Junior Frontend Developer",
        logo: ConsultlyLogo,
        start: "Octubre 2022",
        end: "Mayo 2024",
        description:"Creación de app mobile, desarrollo de nuevas características, mantenimiento de la aplicación, trabajo en equipo. Tecnologías: React, TypeScript, Ionic, SCSS",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React/Next.js",
      "Node.js",
      "CSS/SCSS",
      "GitHub",
      "C++",
      "Python",
      "Java",
      "Ionic",
      "Capacitor",
      "Fastify",
      "Ethers.js",
      "Smart contracts",
      "Supabase",
      "MySQL",
      "PostgreSQL",
      "Mercado Pago API"
    ],
    languages: [
      {
        name: "Español",
        level: "Nativo",
      },
      {
        name: "Inglés",
        level: "A2",
      },
      {
        name: "Portugués",
        level: "A1",
      },
    ],
  } as const;
  