import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonColour: "#C8EE44",
        sidebarBgColour: "#1E1C30",
        mainBgColour: "#201E34",
        tbalBgColour: "#282541",
        walletBg: "#353255",
        textR: "#808281",
        textA: "#6F767E",
      },
    },
  },
  plugins: [],
} satisfies Config;
