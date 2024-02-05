import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ScreenOverlay = styled.div`
	background-color: ${(props) => (props.$expanded ? "rgb(0, 105, 137, 0.2)" : "rgb(0, 105, 137, 0)")};
	height: 50px;
	left: 0;
	position: fixed;
	top: 0;
	transition: background-color ${theme.decorations.animationTime} ease-in-out;
	width: 100%;
	z-index: 1;
`;

export const NavigationWrapper = styled.nav`
	align-items: stretch;
	background: ${theme.colours.white};
	bottom: 0;
	display: flex;
	gap: 16px;
	justify-content: center;
	left: 0;
	padding: 8px;
	position: fixed;
	transition: ${theme.decorations.transition};
	width: 100%;
	z-index: 2;
`;
