import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonWrapper = styled.div`
	display: inline-block;
	${(props) => (props.$margin ? `padding: ${props.$margin}` : "")};
	width: ${(props) => (props.$width ? props.$width : "auto")};

	a,
	button {
		background: transparent;
		border: ${(props) => (props.$border ? `1px solid ${theme.colours.CTA}` : "none")};
		${(props) => (props.$border || !props.$text ? "border-radius: 50vh" : "")};
		color: ${theme.typography.colours.link};
		display: flex;
		font-size: ${theme.typography.fontSize.default};
		font-weight: ${theme.typography.fontWeight.bold};
		height: 50px;
		justify-content: ${(props) => (props.$width ? "space-between" : "center")};
		padding: ${(props) => (props.$border ? `14px ${theme.sizes.spacings.default}` : "14px")};
		position: relative;
		width: ${(props) => (props.$width ? props.$width : "auto")};
		text-decoration: none;
		z-index: 0;

		&::before,
		&::after {
			position: absolute;
			background: #fff;
			z-index: -1;
			transition: 500ms;
			content: "";
			height: calc(100% + 2px);
			width: calc(50% - 10px);
			top: -1px;
		}

		&::before {
			left: -1px;
		}

		&::after {
			right: -1px;
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
			padding-left: ${theme.sizes.spacings.default};
			white-space: nowrap;
		}

		svg {
			height: 100%;
			width: 22px;
		}
	}
`;
