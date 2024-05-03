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
  personalWebsiteUrl: "https://jarocki.me",
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
      degree: "Tecinico en Informatica Personal y Profesional",
      start: "2018",
      end: "2024",
    },
  ],
  work: [
    {
      company: "FinGuru",
      link: "http://cursos-staging.fin.guru/es",
      badges: ["Remote"],
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "Marzo 2024",
      end: "Mayo 2024",
      description:
        "Implemetacion de nuevas caracteristicas, trabajo en equipo. Tecnologias: React, TypeScript, Strapi",
    },
    {
      company: "TapWise",
      link: "https://tapwise.tdm.ar/",
      badges: ["Remote"],
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "Marzo 2024",
      end: "Actualidad",
      description:
        "Creacion de tienda con Hydrogen , aplicacion para mobile en ionic, implemetacion de nuevas caracteristicas. Tecnologias:  Hydrogen, TypeScript, Shopify, Ionic",
    },
    
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "CSS/SCSS",
  ],
  projects: [
    {
      title: "Tranqui",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "Herramienta para la prevencion del suicidio",
      logo: ConsultlyLogo,
      link: {
        label: "tranqui.mdp.edu.ar",
        href: "https://tranqui.mdp.edu.ar/",
      },
    },
   
  ],
} as const;
