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
	border-radius: 8px;
	display: flex;
	flex-direction: ${(props) => (props.$verticalCard ? "row" : "column")};
	${(props) => (props.$verticalCard ? "justify-content: space-between" : "")};
	overflow: hidden;
	position: relative;
	transition: 300ms;
	width: auto;

	&:hover {
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
	}

	> a {
		display: block;
		flex-grow: 1;
		padding: ${theme.sizes.spacings.default};
		position: relative;
		text-decoration: none;
	}

	${CardItemCTAsWrapper} {
		${(props) =>
			props.$verticalCard
              ? `border-left: 1px solid ${theme.colours.kashmir}`
				: `border-top: 1px solid ${theme.colours.kashmir}`};
		flex-direction: ${(props) => (props.$verticalCard ? "column" : "row")};
	}
`;
