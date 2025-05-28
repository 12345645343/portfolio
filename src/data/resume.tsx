import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Daniel.",
  initials: "DB",
  url: "https://portfolio-magicui.vercel.app", // Placeholder URL, update if you have one
  location: "Palermo C.A.B.A",
  locationLink: "https://www.google.com/maps/place/Palermo,+CABA", // Google Maps link for Palermo, CABA
  description:
    "Soy un profesional con formación técnica en edición de video y soporte técnico.",
  summary:
    "Edición de video y soporte técnico, con foco en optimizar y generar valor. Interesado en programación para desarrollar soluciones tecnológicas que beneficien y potencien a las empresas.",
  avatarUrl: "/me.png", // This should be the path to your image",
  skills: [
    "Microsoft Office Suite", // General knowledge, assuming from technical background
    "Adobe Suite",
    "Avid Media Composer",
    "Metus Ingest",
    "Squid",
    "Anydesk",
    "FL Studio",
    "Ableton Live",
    "Recordbox",
    "Adobe Premiere Pro",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // You can add a blog section later if you create one
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "Danyel.bosela@gmail.com",
    tel: "+(54) 11 3599-5293",
    social: {
      // Add your actual social media links here
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-bosela-354ab9243/", // Replace with your LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/sal_de_melodrama/", // Replace with your LinkedIn URL
        icon: Icons.instagram,
        navbar: true,
      },
      whatsapp: {
        name: "Whatsapp",
        url: "https://wa.me/5491135995293", // WhatsApp link with phone number
        icon: Icons.whatsapp,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "danyel.bosela@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "LA CORTE PRODUCTORA",
      href: "#", // No specific website provided in CV
      badges: ["Presencial"],
      location:
        "Ex Presidencia de la República Argentina, Gobernación de la Provincia de Buenos Aires, Ex Gobernación de la Ciudad Autónoma de Buenos Aires",
      title: "Operario de filmoteca",
      logoUrl: "LOGOLACORTE.png",
      // Placeholder, you might need to create a logo
      start: "2023",
      end: "2024",
      description:
        "Ejercicio de los cargos de Tomero, Ayudante de jefe técnico, y Edición de producción. Operario de Filmoteca para importantes medios: Turner, Fox Sports, CNN Radio, La Nación. Herramientas utilizadas: Avid Media Composer, Metus Ingest, Adobe Media Encoder, Squid, Anydesk.",
    },
    {
      company: "FREELANCE EN WORKANA Y FREELANCER",
      href: "#", // No specific website provided in CV
      badges: ["Remoto"], // Assuming freelance work is remote or flexible
      location: "Remote",
      title: "Editor de video",
      logoUrl: "LOGOWORKANA.png", // Placeholder
      start: "2022",
      end: "2023",
      description:
        "Realicé diferentes tipos de trabajos con el programa Adobe Premiere Pro, como edición de videos para publicidades en redes sociales, Twitter y paginas web. Efectué trabajos de edición para videos de YouTube y reels.",
    },
    {
      company: "PRODUCCIONES BAKURA - ALMAGRO CABA",
      href: "#", // No specific website provided in CV
      badges: ["Presencial"],
      location: "Almagro CABA",
      title: "Dj, Productor y sonidista",
      logoUrl: "/LOGOBAKURA.jpg", // Placeholder
      start: "2020",
      end: "2022",
      description:
        "Realicé actividades como sonidista, ediciones de audio, mastering y grabaciones con programas como Ableton live, FL Studio, Récord box, entre otros.",
    },
  ],
  education: [
    {
      school: "Escuela polimodal N°13 Cecilia Gierson",
      href: "#", // No website provided
      degree: "Secundario completo",
      logoUrl: "/school.png", // Placeholder
      start: "", // No start date provided
      end: "", // No end date provided
    },
    {
      school: "ARJAUS",
      href: "#", // No website provided
      degree: "DJ y Producción musical",
      logoUrl: "/arjaus.png", // Placeholder
      start: "", // No start date provided
      end: "", // No end date provided
    },
  ],
  projects: [
    // You can add any personal projects related to video editing, music production, or programming here

    {
      title: "Alia Capacitaciones",
      href: "https://www.instagram.com/p/DIv254mxzbe/", // Replace with your project link
      dates: "Abril 2025", // Adjust dates
      active: true,
      description: "Clase magistral: peeling + otras técnicas",
      // technologies: ["Adobe Premiere Pro", "After Effects", "Davinci Resolve"], // Adjust technologies
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.instagram.com/p/DIv254mxzbe/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/Alia Capacitacioness.mp4",
    },
    {
      title: "IALAB UBA",
      href: "https://www.instagram.com/p/DGTuvvDRZPh/", // Replace with your project link
      dates: "Febrero 2025", // Adjust dates
      active: true,
      description:
        "Invitación Especial: Reunión Informativa del Posgrado y Presentación del Libro",
      // technologies: ["Adobe Premiere Pro", "After Effects", "Davinci Resolve"], // Adjust technologies
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.instagram.com/p/DGTuvvDRZPh/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Certificado",
          href: "/Certificado.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/certificado.jpg",
      video: "/ailab.mp4",
    },
    {
      title: "Solo Leveling",
      href: "https://www.instagram.com/p/C67RKkYOCxE/", // Replace with your project link
      dates: "Mayo 2024", // Adjust dates
      active: true,
      description:
        'Demostración de edición en "Solo Leveling" enfocada en la sinergia audiovisual para potenciar la experiencia del espectador.',
      // technologies: ["Adobe Premiere Pro", "After Effects", "Davinci Resolve"], // Adjust technologies
      technologies: [],
      links: [
        {
          type: "Website",
          href: "https://www.instagram.com/p/C67RKkYOCxE/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/sololeveling.mp4",
    },
    {
      title: "Alia Estética",
      href: "/ifuvideolargo.mp4", // Replace with your project link
      dates: "Mayo 2025", // Adjust dates
      active: true,
      description:
        "Hifu es un tratamiento de levantamiento facial no invasivo y funciona con ultrasonido focalizado de alta intensidad.",
      // technologies: ["Adobe Premiere Pro", "After Effects", "Davinci Resolve"], // Adjust technologies
      technologies: [],
      links: [
        {
          type: "Website",
          href: "tps://www.instagram.com/p/C67RKkYOCxE/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/ifuvideo.mp4",
    },
  ],
} as const;
