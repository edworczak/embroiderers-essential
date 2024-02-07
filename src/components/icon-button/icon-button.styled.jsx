import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonWrapper = styled.div`
	display: inline-block;
	${(props) => (props.$margin ? `margin: ${props.$margin}` : "")};
	width: ${(props) => (props.$width ? props.$width : "auto")};

	a,
	button {
		align-items: center;
		background: white;
		border: 1px solid ${theme.colours.CTA};
		border-radius: 50vh;
		box-sizing: border-box;
		color: ${theme.typography.colours.link};
		display: flex;
		font-size: ${theme.typography.fontSize.default};
		font-weight: ${theme.typography.fontWeight.default};
		gap: ${(props) => (props.$iconOnly ? 0 : theme.sizes.spacings.small)};
		justify-content: ${(props) => (props.$width ? "space-between" : "center")};
		min-height: 40px;
		min-width: 40px;
		padding: ${(props) =>
			props.$iconOnly ? theme.sizes.spacings.small : `${theme.sizes.spacings.small} ${theme.sizes.spacings.default}`};
		position: relative;
		width: ${(props) => (props.$width ? props.$width : "auto")};
		text-decoration: none;
		z-index: 0;

		&:hover,
		&:focus {
			border-color: ${theme.colours.CTA};
			color: ${theme.colours.CTA};
			text-decoration: none;
		}

		span {
			white-space: nowrap;

			${(props) => (props.$iconOnly ? "font-size: 0; line-height: 0" : "")};
		}

		svg {
			height: 18px;
			width: 18px;
		}
	}
`;
