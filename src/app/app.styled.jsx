import styled from "styled-components";

import { theme } from "../shared-styles/theme.styled";

export const AppWrapper = styled.div`
	display: flex;
`;

export const Content = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	padding-left: 200px;
	width: 100%;

	@media screen and (${theme.sizes.breakpoints.tabletPortraitDown}) {
		padding-left: 50px;
	}
`;
