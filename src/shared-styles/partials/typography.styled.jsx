import { baseColours } from "./base-colours.styled";

export const typography = {
	colours: {
		body: baseColours.dark,
		link: baseColours.CTA,
		linkHover: baseColours.CTAHover,
	},
	fontFamily: "'Roboto', sans-serif",
	fontFamilyHeader: "'Sacramento', cursive",
	fontSize: {
		default: "14px",
		h1: "2.5em",
		h2: "2.3em",
		h3: "2em",
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
