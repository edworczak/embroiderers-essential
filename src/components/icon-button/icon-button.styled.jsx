import styled, { css } from "styled-components";
import {Link} from "react-router-dom";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonStyled = styled.button`
	background: transparent;
	border: ${(props) => (props.$border ? `2px solid ${theme.colours.CTA}` : "none")};
	color: ${theme.typography.colours.link};
	display: flex;
	font-size: ${theme.typography.fontSize.default};
	height: 50px;
	justify-content: ${(props) => (props.$width ? "space-between" : "center")};
	${(props) => (props.$margin ? `margin: ${props.$margin}` : "")};
	padding: 14px;
	width: ${(props) => (props.$width ? props.$width : "auto")};

	${(props) =>
		props.$border &&
		css`
			border-radius: 25px;
			padding: 14px ${theme.sizes.spacings.default};

			&:hover,
			&:focus {
				background: ${theme.colours.CTAHover};
				border-color: ${theme.colours.CTAHover};
				color: ${theme.colours.white};

				path {
					color: ${theme.colours.white};
				}
			}
		`}

	span {
		padding-right: ${theme.sizes.spacings.default};
		white-space: nowrap;
	}

	svg {
		height: 100%;
		width: 22px;
	}
`;

export const IconLinkStyled = styled(Link)`
	background: transparent;
	border: ${(props) => (props.$border ? `2px solid ${theme.colours.CTA}` : "none")};
	color: ${theme.typography.colours.link};
	display: flex;
	font-size: ${theme.typography.fontSize.default};
	font-weight: ${theme.typography.fontWeight.bold};
	height: 50px;
	justify-content: ${(props) => (props.$width ? "space-between" : "center")};
	${(props) => (props.$margin ? `margin: ${props.$margin}` : "")};
	padding: 14px;
	width: ${(props) => (props.$width ? props.$width : "auto")};
	text-decoration: none;
	
	&:hover,
	&:focus {
		text-decoration: none;
	}

	${(props) =>
	props.$border &&
	css`
			border-radius: 25px;
			padding: 14px ${theme.sizes.spacings.default};

			&:hover,
			&:focus {
				background: ${theme.colours.CTAHover};
				border-color: ${theme.colours.CTAHover};
				color: ${theme.colours.white};

				path {
					color: ${theme.colours.white};
				}
			}
		`}

	span {
		padding-right: ${theme.sizes.spacings.default};
		white-space: nowrap;
	}

	svg {
		height: 100%;
		width: 22px;
	}
`;