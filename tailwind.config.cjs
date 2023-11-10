/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        landscape: "url('/assets/background.jpg')",
      },
      opacity: {
        1: ".01"
      },
    },
  },
  safelist: [
    "bg-gradient-to-t",
    "bg-gradient-to-tr",
    "bg-gradient-to-r",
    "bg-gradient-to-br",
    "bg-gradient-to-b",
    "bg-gradient-to-bl",
    "bg-gradient-to-l",
    "bg-gradient-to-tl",
    "to-slate-600",
    "to-zinc-800",
    "to-stone-500",
    "to-red-500",
    "to-orange-500",
    "to-amber-300",
    "to-lime-400",
    "to-green-500",
    "to-emerald-600",
    "to-teal-700",
    "to-cyan-400",
    "to-sky-300",
    "to-indigo-700",
    "to-violet-700",
    "to-fuchsia-300",
    "to-pink-500",
    "to-rose-400",
    "from-slate-600",
    "from-zinc-800",
    "from-stone-500",
    "from-red-500",
    "from-orange-500",
    "from-amber-300",
    "from-lime-400",
    "from-green-500",
    "from-emerald-600",
    "from-teal-700",
    "from-cyan-400",
    "from-sky-300",
    "from-indigo-700",
    "from-violet-700",
    "from-fuchsia-300",
    "from-pink-500",
    "from-rose-400",
  ],
  plugins: [],
};
