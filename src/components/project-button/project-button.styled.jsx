import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectImage = styled.div`
	background-size: cover;
	background-position: center;
	border-left: 4px solid ${theme.colours.kashmir};
	border-right: 4px solid ${theme.colours.kashmir};
	bottom: 0;
	${(props) => (props.$defaultImage ? "filter: grayscale(100%);" : "")}
	position: absolute;
	top: 0;
	width: 200px;
`;

export const ProjectInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 150px;
	padding-left: 216px;
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
