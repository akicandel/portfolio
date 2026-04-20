module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "akiandemma-eb-garamond-medium":
          "var(--akiandemma-com-eb-garamond-medium-font-family)",

        "akiandemma-eb-garamond-medium-italic-underline":
          "var(--akiandemma-com-eb-garamond-medium-italic-underline-font-family)",

        "akiandemma-inter-medium":
          "var(--akiandemma-com-inter-medium-font-family)",

        "akiandemma-inter-medium-underline":
          "var(--akiandemma-com-inter-medium-underline-font-family)",

        "akiandemma-space-grotesk-regular":
          "var(--akiandemma-com-space-grotesk-regular-font-family)",

        "akiandemma-space-grotesk-regular-underline":
          "var(--akiandemma-com-space-grotesk-regular-underline-font-family)"
      }
    }
  },

  plugins: []
};
