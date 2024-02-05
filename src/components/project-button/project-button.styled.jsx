import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonStyled = styled.div`
	background: white;
	flex-grow: 1;
	overflow: hidden;
	padding: ${theme.sizes.spacings.default};
	position: relative;
	width: auto;
`;

export const ProjectImage = styled.a`
	background: ${(props) => `url(${props.$projectImage})` || theme.colours.kashmir};
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
`;

export const ProjectTitleWrapper = styled.a`
	display: block;
	flex-grow: 1;
	margin-bottom: 24px;
`;

export const ProjectTitle = styled.h3`
	color: ${theme.colours.dark};
	margin-bottom: ${theme.sizes.spacings.small};
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const ProjectDates = styled.p`
	color: ${theme.colours.dark};
	margin-bottom: ${theme.sizes.spacings.small};
	display: flex;
	gap: 24px;

	span {
		position: relative;
	}

	span:nth-child(n + 2)::before {
		background: black;
		content: "";
		height: 16px;
		left: -11px;
		position: absolute;
		width: 1px;
	}
`;
