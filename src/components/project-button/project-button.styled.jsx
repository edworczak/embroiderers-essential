import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonWrapper = styled.div`
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

export const ProjectInfoWrapper = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${theme.sizes.spacings.default};
`;

export const ProjectCTAWrapper = styled.div`
	border-top: 1px solid ${theme.colours.kashmir};
	display: flex;
	justify-content: flex-end;
	padding: ${theme.sizes.spacings.default};
`;

export const ProjectTitleWrapper = styled.div`
	display: flex;
	gap: ${theme.sizes.spacings.big};
	justify-content: space-between;
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
