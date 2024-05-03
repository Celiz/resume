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
      degree: "Técnico en Informática Personal y Profesional",
      start: "2018",
      end: "2024",
    },
  ],
  work: [
    {
      company: "TapWise",
      link: "https://tapwise.tdm.ar/",
      badges: ["Remoto"],
      title: "Junior Full Stack Developer",
      logo: ParabolLogo,
      start: "Marzo 2024",
      end: "Actualidad",
      description:
        "Creación de tienda con Hydrogen , aplicación para mobile en ionic, implementación de nuevas características. Tecnologías:  Hydrogen, TypeScript, Shopify, Ionic Capacitor, SCSS",
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
        "Implementación de nuevas características, trabajo en equipo. Tecnologías: React, TypeScript, Strapi, SCSS",
    },
    {
      company: "DY/DX BOT",
      link: "",
      badges: ["Remoto"],
      title: "Junior Backend Developer",
      logo: ConsultlyLogo,
      start: "Febrero 2024",
      end: "Marzo 2024",
      description:"Bot de uso interno que se encargaba de arbitrar tasas de interés de diferentes protocolos DeFi en redes EVM y Cosmos. Tecnologías: Fastify, Ethers.js v5 y v6, Smart contracts (EVM y Cosmos)",
    },
    {
      company: "Tranqui",
      link: "https://tranqui.mdp.edu.ar/",
      badges: ["Presencial"],
      title: "Junior Frontend Developer",
      logo: ConsultlyLogo,
      start: "Octubre 2023",
      end: "Actualidad",
      description:"Creación de app mobile,desarrollo de nuevas características, mantenimiento de la aplicación, trabajo en equipo. Tecnologías: React, TypeScript, Ionic, SCSS",
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
  ],
  
   

} as const;
