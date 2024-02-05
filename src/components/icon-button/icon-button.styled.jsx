import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonWrapper = styled.div`
	display: inline-block;
	${(props) => (props.$margin ? `padding: ${props.$margin}` : "")};
	width: ${(props) => (props.$width ? props.$width : "auto")};

	a,
	button {
		background: white;
		border: 1px solid ${theme.colours.CTA};
		border-radius: 50vh;
		color: ${theme.typography.colours.link};
		display: flex;
		font-size: ${theme.typography.fontSize.default};
		font-weight: ${theme.typography.fontWeight.default};
		gap: ${theme.sizes.spacings.small};
		justify-content: ${(props) => (props.$width ? "space-between" : "center")};
		min-height: 40px;
		min-width: 40px;
		padding: ${theme.sizes.spacings.small} ${theme.sizes.spacings.default};
		position: relative;
		width: ${(props) => (props.$width ? props.$width : "auto")};
		text-decoration: none;
		z-index: 0;

		&::before,
		&::after {
			position: absolute;
			background: #fff;
			z-index: -1;
			transition: 300ms;
			content: "";
			height: calc(100% + 2px);
			width: calc(50% - 8px);
			top: -1px;
		}

		&::before {
			border-radius: 50vh 0 0 50vh;
			left: -2px;
		}

		&::after {
			border-radius: 0 50vh 50vh 0;
			right: -2px;
		}

		&:hover,
		&:focus {
			border-color: ${theme.colours.CTA};
			color: ${theme.colours.CTA};
			text-decoration: none;

			&::before,
			&::after {
				width: 0;
			}
		}

		span {
			white-space: nowrap;
		}

		svg {
			height: 18px;
			width: 18px;
		}
	}
`;
