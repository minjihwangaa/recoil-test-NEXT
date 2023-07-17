/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        navy_light_1: "#D6D8E8",
        navy_light_2: "#AFB2D3",
        navy_light_3: "#777EB6",
        navy_light_4: "#4B5290",
        navy_main: "#2C3058",
        navy_dark_1: "#232642",
        navy_dark_2: "#0E0F1A",
        yellow_light_1: "#FEFBF6",
        yellow_light_2: "#F7EBCC",
        yellow_light_3: "#ECD189",
        yellow_main: "#DFA718",
        yellow_dark_1: "#E4941C",
        yellow_dark_2: "#E17909",
        yellow_dark_3: "#DB6A07",
        steel_light_1: "#F8FAFC",
        steel_light_2: "#E4E8EF",
        steel_light_3: "#96A7C5",
        steel_main: "#607BA8",
        steel_dark_1: "#506991",
        steel_dark_2: "#495F85",
        steel_dark_3: "#3D547A",
        coral_light_1: "#FDF9F8",
        coral_light_2: "#EBCCC6",
        coral_light_3: "#CD8070",
        coral_main: "#C2624F",
        coral_dark_1: "#B54E3A",
        coral_dark_2: "#9D4635",
        coral_dark_3: "#883A2B",
        pearl: "#F8F8F8",
        gray_100: "#ffffff",
        gray_200: "#f1f1f1",
        gray_300: "#d3d3d3",
        gray_400: "#b5b5b5",
        gray_500: "#878787",
        gray_600: "#656565",
        gray_700: "#494949",
        gray_800: "#3a3a3a",
        gray_900: "#222222",
        black: "#000000",
      },
      dropShadow: {
        lg: "15px 15px 15px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        navy_light_1: "#D6D8E8",
        navy_light_2: "#AFB2D3",
        navy_light_3: "#777EB6",
        navy_light_4: "#4B5290",
        navy_main: "#2C3058",
        navy_dark_1: "#232642",
        navy_dark_2: "#0E0F1A",
        yellow_light_1: "#FEFBF6",
        yellow_light_2: "#F7EBCC",
        yellow_light_3: "#ECD189",
        yellow_main: "#DFA718",
        yellow_dark_1: "#E4941C",
        yellow_dark_2: "#E17909",
        yellow_dark_3: "#DB6A07",
        steel_light_1: "#F8FAFC",
        steel_light_2: "#E4E8EF",
        steel_light_3: "#96A7C5",
        steel_main: "#607BA8",
        steel_dark_1: "#506991",
        steel_dark_2: "#495F85",
        steel_dark_3: "#3D547A",
        coral_light_1: "#FDF9F8",
        coral_light_2: "#EBCCC6",
        coral_light_3: "#CD8070",
        coral_main: "#C2624F",
        coral_dark_1: "#B54E3A",
        coral_dark_2: "#9D4635",
        coral_dark_3: "#883A2B",
        pearl: "#F8F8F8",
        gray_100: "#ffffff",
        gray_200: "#f1f1f1",
        gray_300: "#d3d3d3",
        gray_400: "#b5b5b5",
        gray_500: "#878787",
        gray_600: "#656565",
        gray_700: "#494949",
        gray_800: "#3a3a3a",
        gray_900: "#222222",
        black: "#000000",
      },
      fontSize: {
        h1: [
          "48px",
          {
            lineHeight: {
              150: "150%",
            },
            fontWeight: 600,
          },
        ],
        h2: [
          "36px",
          {
            lineHeight: {
              150: "150%",
            },
            fontWeight: 600,
          },
        ],
        h2_mobile: [
          "24px",
          {
            lineHeight: {
              150: "150%",
            },
            fontWeight: 600,
          },
        ],
        h3: [
          "24px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        h4: [
          "18px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        body1: [
          "16px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        body2: [
          "14px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        button_16: [
          "16px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        button_14: [
          "14px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        caption_12: [
          "12px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
        caption_10: [
          "10px",
          {
            lineHeight: {
              150: "150%",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
