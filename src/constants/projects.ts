import { IProject } from "@/utils/models"

export const projects: IProject[] = [
  {
    title: "Roulette Hero",
    description:
      "Un juego web Dungeon donde todo depende de la suerte y tus decisiones.",
    image: "/roulette-hero.png",
    source: "https://github.com/Luca-Javier/Roulette-Hero",
    link: "https://roulette-hero.vercel.app",
    technologies: ["react", "javascript", "figma", "redux", "i18n"],
  },
  {
    title: "Pagina de Recetas",
    description: "Página de recetas echa en grupo para projecto escolar",
    image: "/recetasPage.svg",
    source: "https://github.com/Luca-Javier/Pagina-recetas",
    technologies: ["javascript", "php", "html", "css", "mysql", "figma"],
  },
  {
    title: "NEXT-xckd",
    description:
      "Recopilación de comics de xckd, comics para programadores, con un escrapper en NodeJS y frontend echo en NextJS",
    image: "/xkcd.png",
    link: "https://next-comics-xkcd.vercel.app/es",
    source: "https://github.com/Luca-Javier/NEXT-xckd",
    technologies: ["react", "nextjs", "nodejs", "i18n"],
  },
  {
    title: "What is GPT-3",
    description:
      "Diseño moderno sobre que es GPT-3, armado tal cual el diseño en figma",
    image: "/modern.png",
    link: "https://what-gpt-3-design.vercel.app",
    source: "https://github.com/Luca-Javier/whatGPT3-design",
    technologies: ["react", "sass", "figma"],
  },
  {
    title: "MS-BUY",
    description:
      "Eccomerce de venta de ropa, tecnología y joyería, con un diseño moderno y minimalista. Echo con NextJS y Sanity para el CMS",
    image: "/ms-buy.png",
    link: "https://ms-buy.vercel.app",
    source: "https://github.com/Luca-Javier/ms-buy",
    technologies: ["react", "nextjs", "typescript", "chakraui"],
  },
  {
    title: "Portfolio",
    description: "El portfolio que estás viendo ahora mismo",
    image: "/portfolio.png",
    link: "https://portfolio2.vercel.app",
    source: "https://github.com/Luca-Javier/portfolio2",
    technologies: ["react", "nextjs", "styled-components", "typescript"],
  },
]
