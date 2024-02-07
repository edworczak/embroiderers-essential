import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ColourSwatch = styled.div`
	background-color: ${(props) => (props.$background ? props.$background : "transparent")};
	border-left: 4px solid ${theme.colours.kashmir};
	border-right: 4px solid ${theme.colours.kashmir};
	bottom: 0;
	position: absolute;
	top: 0;
	width: ${theme.sizes.spacings.big};
`;

export const ColourInfo = styled.div`
	box-sizing: border-box;
	padding-left: 46px;
	width: 100%;
`;

export const ColourName = styled.div`
	h3 {
		display: inline-block;
		margin-left: ${theme.sizes.spacings.default};
	}
`;

export const ColourSubstituteWrapper = styled.div`
	padding-left: 0;
`;
export const ColourSubstitute = styled.div`
	display: flex;
	gap: ${theme.sizes.spacings.default};
	justify-content: space-between;
`;
