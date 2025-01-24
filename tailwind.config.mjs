/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSansFont", "sans-serif", "system-ui"],
        Monserrat: ["MonserratFont", "sans-serif", "system-ui"],
        Poppins: ["PoppinsFont", "sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
