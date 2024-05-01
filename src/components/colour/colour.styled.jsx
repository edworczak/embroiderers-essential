import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ColourSwatch = styled.div`
	border-left: 4px solid ${theme.colours.kashmir};
	border-right: 4px solid ${theme.colours.kashmir};
	bottom: 0;
	position: absolute;
	top: 0;
	width: ${theme.sizes.spacings.big};
`;

export const ColourInfo = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: ${theme.sizes.spacings.default};
	height: 100%;
	justify-content: space-between;
	padding-left: 46px;
	width: 100%;
`;

export const ColourName = styled.h3`
	color: ${theme.typography.colours.body};
	margin-bottom: ${theme.sizes.spacings.default};

	span {
		font-family: ${theme.typography.fontFamily};
		font-size: ${theme.typography.fontSize.default};
		font-weight: ${theme.typography.fontWeight.default};
		display: inline-block;
		margin: 0 ${theme.sizes.spacings.default} 0 0;
	}
`;

export const ColourSubstituteWrapper = styled.div`
	padding-left: 0;
`;
