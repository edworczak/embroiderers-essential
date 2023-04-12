import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonStyled = styled.div`
	background: ${theme.colours.kashmir};
	border-radius: ${theme.decorations.borderRadiusDefault};
	display: flex;
	flex-shrink: 0;
	margin: 0 ${theme.sizes.spacings.default};
	overflow: hidden;
	position: relative;
	width: auto;
	
	> button {
		position: absolute;
		right: 0;
		top: 0;
	}
`;

export const ProjectImage = styled.a`
	background: ${(props) =>
		`url(${props.$projectImage})` || theme.colours.kashmir};
	background-position: center;
	background-size: cover;
	flex-shrink: 0;
	height: 100%;
	position: relative;
	width: 50px;
`;

export const ProjectInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 250px;
	padding: ${theme.sizes.spacings.default};
`;

export const ProjectTitleWrapper = styled.a`
	flex-grow: 1;
	margin-right: 50px;
	padding-bottom: ${theme.sizes.spacings.default};
	width: calc(100% - 34px);
`;

export const ProjectTitle = styled.h3`
	color: ${theme.colours.dark};
	margin-bottom: ${theme.sizes.spacings.small};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Timer = styled.p`
	color: ${theme.colours.dark};
	margin-bottom: ${theme.sizes.spacings.small};
	
	svg {
		margin-right: ${theme.sizes.spacings.small};
	}
`;

export const ActionWrapper = styled.div`
	button {
		width: auto;
	}
`;