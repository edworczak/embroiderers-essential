import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../shared-styles/theme.styled";

export const NavigationWrapper = styled.nav`
	align-items: stretch;
	background: ${theme.colours.white};
	bottom: 0;
	box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	left: 0;
	position: fixed;
	top: 0;
	transition: ${theme.decorations.transition};
	width: 200px;
	z-index: 2;
`;

export const NavigationBackHomeWrapper = styled.div`
	display: block;
	margin-top: auto;
	width: 100%;
`;

export const NavigationLink = styled(Link)`
        color: ${(props) => (props.$active ? theme.colours.white : theme.colours.CTA)};
		display: block;
		padding: ${theme.sizes.spacings.default};
		position: relative;
		text-align: right;
		transition: color 300ms ease-in-out;
		width: 100%;

		&::after {
			background-color: ${theme.colours.CTA};
			bottom: 0;
			content: "";
			position: absolute;
			right: 0;
			top: 0;
			transition: width 300ms ease-out;
			width: ${(props) => (props.$active ? "100%" : "0")};
			z-index: -1;
		}

		svg {
			left: ${theme.sizes.spacings.default};
			position: absolute;
		}

		&:hover,
		&:focus {
			color: ${theme.colours.white};

			&::after {
				width: 100%;
			}
		}
`;