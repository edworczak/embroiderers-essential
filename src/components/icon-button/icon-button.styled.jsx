import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonWrapper = styled.div`
	display: inline-block;
	${(props) => (props.$margin ? `padding: ${props.$margin}` : "")};
	width: ${(props) => (props.$width ? props.$width : "auto")};

	a,
	button {
		background: transparent;
		border: ${(props) => (props.$border ? `2px solid ${theme.colours.CTA}` : "none")};
		${(props) => (props.$border || !props.$text ? "border-radius: 25px" : "")};
		color: ${theme.typography.colours.link};
		display: flex;
		font-size: ${theme.typography.fontSize.default};
		font-weight: ${theme.typography.fontWeight.bold};
		height: 50px;
		justify-content: ${(props) => (props.$width ? "space-between" : "center")};
		padding: ${(props) => (props.$border ? `14px ${theme.sizes.spacings.default}` : "14px")};
		width: ${(props) => (props.$width ? props.$width : "auto")};
		text-decoration: none;

		&:hover,
		&:focus {
			background: ${theme.colours.CTAHover};
			border-color: ${theme.colours.CTAHover};
			color: ${theme.colours.white};
			text-decoration: none;

			path {
				color: ${theme.colours.white};
			}
		}

		span {
			padding-right: ${theme.sizes.spacings.default};
			white-space: nowrap;
		}

		svg {
			height: 100%;
			width: 22px;
		}
	}
`;
