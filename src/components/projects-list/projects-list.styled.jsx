import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectListScroll = styled.div`
  margin: 0 -${theme.spacings.big};
  overflow-x: auto;
  width: calc(100% + (2 * ${theme.spacings.big}));
`;

export const ProjectsListWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0 ${theme.spacings.default};
  width: auto;
`;
