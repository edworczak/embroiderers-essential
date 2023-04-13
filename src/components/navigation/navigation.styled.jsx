import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ScreenOverlay = styled.div`
	background-color: ${(props) => (props.$expanded ? "rgb(0, 105, 137, 0.2)" : "rgb(0, 105, 137, 0)")};
	height: 100vh;
	left: 0;
	position: fixed;
	top: 0;
	transition: background-color ${theme.decorations.animationTime} ease-in-out;
	width: ${(props) => (props.$opening || props.$closing || props.$expanded ? "100%" : "50px")};
	z-index: 1;
`;

export const NavigationWrapper = styled.nav`
	align-items: stretch;
	background: ${theme.colours.kashmir};
	display: flex;
	flex-direction: column;
	height: 100vh;
	left: 0;
	position: fixed;
	top: 0;
	justify-content: space-between;
	transition: ${theme.decorations.transition};
	width: ${(props) => (props.$expanded ? "200px" : theme.sizes.spacings.navWidth)};
	z-index: 2;

	button {
		width: ${(props) => (props.$expanded ? "100%" : "50px")};

		span {
			line-height: 22px;
			overflow: hidden;
			padding-right: 0;
			text-align: right;
			transition: width ${theme.decorations.animationTime} ease-in-out;
			width: ${(props) => (props.$expanded && !props.$opening ? "calc(100% - 22px)" : "0")};
		}

		svg {
			margin-left: ${(props) => (props.$expanded && !props.$opening ? "16px" : "0")};
			transition: margin-left ${theme.decorations.animationTime} ease-in-out;
		}
	}

	@media only screen and (max-width: ${theme.sizes.breakpoints.mobile}) {
		flex-direction: column;
	}
`;
