import styled from "styled-components";

import { theme } from "../shared-styles/theme.styled";

export const AppWrapper = styled.div`
	display: flex;
`;

export const Content = styled.div`
	box-sizing: border-box;
	padding-left: 200px;
	width: 100%;

	@media screen and (${theme.sizes.breakpoints.tabletPortraitDown}) {
		padding-left: 50px;
	}
`;
