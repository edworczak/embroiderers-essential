import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonStyled = styled.a`
	background: ${theme.colours.kashmir};
	border-radius: ${theme.decorations.borderRadiusDefault};
	display: flex;
	flex-shrink: 0;
	margin: 0 ${theme.sizes.spacings.default};
	overflow: hidden;
	width: auto;
`;

export const ProjectImage = styled.div`
	background: ${(props) => `url(${props.imgURL})` || theme.colours.kashmir};
	background-position: center;
	background-size: cover;
	height: 100%;
	position: relative;
	width: 50px;

	button {
		bottom: 0;
		position: absolute;
		right: 0;
	}
`;

export const ProjectInfoWrapper = styled.div`
	padding: ${theme.sizes.spacings.small};
`;

export const ProjectTitle = styled.h3`
	margin: ${theme.sizes.spacings.small};
`;
