/** @type {import('tailwindcss').Config} */
const colors = require('./colors.json');

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				DarkBlue: colors.DarkBlue,
				BorderColor: colors.BorderColor,
				LeftSideBarColor: colors.LeftSideBarColor,
				TextColor: colors.TextColor,
				RightBgColor: colors.RightBgColor,
				Purple: colors.Purple,
				CircleBorderColor: colors.CircleBorderColor,
				CircleColor: colors.CircleColor,
				CircleTextColor: colors.CircleTextColor,
				Orange: colors.Orange,
				Green: colors.Green,
				DarkPurple: colors.DarkPurple,
				DescriptionText: colors.DescriptionText,
				LightGray: colors.LightGray
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			}, ['responsive'])
		}
	],
};
