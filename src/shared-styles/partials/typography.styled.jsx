import { baseColours } from "./base-colours.styled";

export const typography = {
	colours: {
		body: baseColours.dark,
		link: baseColours.CTA,
		linkHover: baseColours.CTAHover,
	},
	fontFamily: "'Quicksand', sans-serif",
	fontFamilyCursive: "'Sacramento', cursive",
	fontSize: {
		default: "16px",
		h1: "2.4em",
		h2: "2em",
		h3: "1.8em",
	},
	fontWeight: {
		default: 300,
		bold: 500,
		header: 400,
	},
	lineHeight: {
		default: "1.5em",
	},
};
