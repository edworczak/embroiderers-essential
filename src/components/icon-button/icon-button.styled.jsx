import styled, { css } from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonStyled = styled.button`
	background: transparent;
	border: ${(props) => (props.$border ? `2px solid ${theme.colours.CTA}` : "none")};
	color: ${theme.typography.colours.link};
	display: flex;
	font-size: ${theme.typography.fontSize.default};
	height: 50px;
	justify-content: right;
	padding: 14px;
	width: ${(props) => (props.$text ? "auto" : "50px")};

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
