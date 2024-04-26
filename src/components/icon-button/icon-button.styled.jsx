import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonWrapper = styled.div`
	display: inline-block;
	${(props) => (props.$margin ? `margin: ${props.$margin}` : "")};
	width: ${(props) => (props.$width ? props.$width : "auto")};

	a,
	button {
		align-items: center;
		background: transparent;
		//border: 1px solid ${theme.colours.CTA};
		border-radius: 50vh;
		box-sizing: border-box;
		color: ${theme.typography.colours.link};
		display: flex;
		font-size: ${theme.typography.fontSize.default};
		font-weight: ${theme.typography.fontWeight.default};
		gap: ${(props) => (props.$iconOnly ? 0 : theme.sizes.spacings.default)};
		justify-content: ${(props) => (props.$width ? "space-between" : "center")};
		min-height: 40px;
		min-width: 40px;
		padding: ${(props) =>
			props.$iconOnly ? theme.sizes.spacings.small : `${theme.sizes.spacings.small} ${theme.sizes.spacings.default}`};
		position: relative;
		width: ${(props) => (props.$width ? props.$width : "auto")};
		text-decoration: none;
		transition: color 300ms ease-in-out;
		z-index: 0;

		&::after {
			background-color: ${theme.colours.CTA};
			border-radius: 50vh;
			content: "";
			height: 0;
			position: absolute;
			transition: all 300ms ease-out;
			width: 0;
			z-index: -1;
		}

		&:hover,
		&:focus {
			border-color: ${theme.colours.CTA};
			color: ${theme.colours.white};
			text-decoration: none;

			&::after {
				height: 100%;
				width: 100%;
			}

			svg {
				fill: ${theme.colours.white};
				color: ${theme.colours.white};
			}
		}

		span {
			line-height: 18px;
			white-space: nowrap;

			${(props) => (props.$iconOnly ? "font-size: 0; line-height: 0" : "")};
		}

		svg {
			height: 18px;
			transition: color 300ms ease-in-out;
			width: 18px;
		}
	}
`;
