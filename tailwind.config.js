module.exports = {
  mode: "jit",
  purge: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				'burnt-orange': '#FE4D01',
				'light-grey': '#F6F6F6',
				'dark-grey': '#00000080'
			}
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
