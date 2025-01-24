import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["dark"],
  },
};
