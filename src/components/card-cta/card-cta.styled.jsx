import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const CardCTAWrapper = styled.div`
	background: white;
	flex-grow: 1;
	min-width: 260px;
	overflow: hidden;
	position: relative;
	transition: 300ms;
	width: auto;

	&:hover {
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
	}
`;

export const CardAnchorContent = styled.a`
	display: flex;
	justify-content: space-between;
	padding: ${theme.sizes.spacings.default};
	position: relative;
`;

export const CardItemCTAsWrapper = styled.div`
	border-top: 1px solid ${theme.colours.kashmir};
	display: flex;
	justify-content: flex-end;
	padding: ${theme.sizes.spacings.default};
`;
