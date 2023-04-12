import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonStyled = styled.div`
	background: ${theme.colours.kashmir};
	border-radius: ${theme.decorations.borderRadiusDefault};
	display: flex;
	flex-shrink: 0;
	margin: 0 ${theme.sizes.spacings.default};
	overflow: hidden;
	width: auto;
`;

export const ProjectImage = styled.a`
	background: ${(props) =>
		`url(${props.$projectImage})` || theme.colours.kashmir};
	background-position: center;
	background-size: cover;
	height: 100%;
	position: relative;
	width: 50px;
`;

export const ProjectInfoWrapper = styled.div`
	padding: ${theme.sizes.spacings.default};

	button {
		margin-bottom: ${theme.sizes.spacings.small};
	}
`;

export const ProjectTitle = styled.h3`
	margin-bottom: ${theme.sizes.spacings.small};
`;
