import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const CardItemCTAsWrapper = styled.div`
	display: flex;
	gap: ${theme.sizes.spacings.default};
	justify-content: flex-end;
	padding: ${theme.sizes.spacings.default};
`;

export const CardCTAWrapper = styled.div`
	background: white;
	${(props) => (props.$smallColourCard ? "display: flex" : "")};
	flex: 1 1 0;
	${(props) => (props.$smallColourCard ? "justify-content: space-between" : "")};
	min-width: 260px;
	overflow: hidden;
	position: relative;
	transition: 300ms;
	width: auto;

	&:hover {
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
	}

	> a {
		display: block;
		padding: ${theme.sizes.spacings.default};
		position: relative;
		text-decoration: none;
	}

	${CardItemCTAsWrapper} {
		${(props) =>
			props.$smallColourCard
				? `border-left: 1px solid ${theme.colours.kashmir}`
				: `border-top: 1px solid ${theme.colours.kashmir}`};
		flex-direction: ${(props) => (props.$smallColourCard ? "column" : "row")};
	}
`;
