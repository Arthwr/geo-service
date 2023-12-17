/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        navBarBg: "rgba(33, 109, 106, 0.95)",
        navTxtColor: "rgba(255, 255, 255, 1)",
        heroBg: "rgba(66, 117, 109, 0.55)",
        buttonBg: "rgba(39, 113, 110, 1)",
        sectionLine: "rgba(33, 109, 106, 0.95)",
        contactBg: "rgba(74, 137, 134, 1)",
        contactFormBg: "rgba(255, 255, 255, 1)",
        contactBodyBg: "rgba(236, 246, 246, 1)",
        contactSubmitButtonBg: "rgba(238, 93, 93, 1)",
        navText: "rgba(255, 255, 255, 1)",
        headerText: "rgba(0, 0, 0, 1)",
        heroTextBg: "rgba(255, 253, 253, 1)",
        textHighlight: "rgba(18, 165, 157, 1)",
        tabTxtNotActive: "rgba(125, 125, 125, 1)",
        tabTxtActive: "rgba(255, 255, 255, 0.95)",
        titleGreenTxtColor: "rgba(33, 109, 106, 0.95)",
        mainTxtColor: "rgba(0, 0, 0, 1)",
        mainBgColor: "rgba(57, 119, 116, 1)",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
