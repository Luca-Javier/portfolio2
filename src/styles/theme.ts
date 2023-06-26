import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  fonts: {
    main: "Space Grotesk, sans-serif",
    title: "Space Grotesk, sans-serif",
  },
  colors: {
    text: "hsl(204,23.8%,95.9%)",
    subText: "rgba(255, 255, 255, 0.75)",
    primary: "#0F1624",
    gradient1: "linear-gradient(270deg, #F46737 0%, #945DD6 100%)",
    gradient2: "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)",
    gradient3: `linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%)`,
    gradientCard: `radial-gradient(218.88% 196.33% at 26.28% 17.23%, #0F1624 0%, rgba(0, 71, 154, 0.88) 100%)`,
  },

  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
    value: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  maxWidth: "1280px",
}

export default theme
