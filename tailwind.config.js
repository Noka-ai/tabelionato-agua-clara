/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#12294A", light: "#1B3F6B", dark: "#0E2440" },
        notarial: "#1D5FD6",
        cyan: { deep: "#0E7490" },
        ink: "#0F172A",
        offwhite: "#F8FAFC",
        mist: "#F1F5F9",
        line: "#E2E8F0",
        zap: { DEFAULT: "#16A34A", dark: "#15803D" }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"]
      },
      borderRadius: { xl: "16px" },
      boxShadow: {
        sm: "0 1px 3px rgba(15,23,42,.05)",
        md: "0 8px 26px rgba(15,23,42,.07)",
        lg: "0 12px 32px rgba(15,23,42,.09)"
      }
    }
  },
  plugins: []
};
