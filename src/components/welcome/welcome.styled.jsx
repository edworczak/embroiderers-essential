import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const InfoWrapper = styled.div`
	padding: 0;
`;

export const Info = styled.div`
	display: flex;
	line-height: 32px;
	margin: 0 0 ${theme.sizes.spacings.small};

	svg {
		margin-right: ${theme.sizes.spacings.small};
	}

	p {
		margin-bottom: 0;
	}
`;

export const IconWrapper = styled.div`
	height: 100%;
`;

export const NumberHighLight = styled.span`
	color: ${theme.colours.highlight};
	font-family: ${theme.typography.fontFamilyHeader};
	font-size: 28px;
	font-weight: ${theme.typography.fontWeight.header};
	line-height: 28px;
	margin: 0 4px;
`;
