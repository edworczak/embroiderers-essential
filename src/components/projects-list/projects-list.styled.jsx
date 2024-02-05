import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectListScroll = styled.div`
	margin: 0 -${theme.sizes.spacings.big};
	overflow-x: auto;
	width: calc(100% + (2 * ${theme.sizes.spacings.big}));
`;

export const ProjectsListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${theme.sizes.spacings.default};
	justify-content: flex-start;
`;
