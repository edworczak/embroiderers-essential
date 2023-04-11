import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonStyled = styled.a`
  background: ${theme.colours.lightBG};
  border-radius: ${theme.border.radius.default};
  flex-shrink: 0;
  margin: ${theme.spacings.default};
  overflow: hidden;
  width: 200px;
`;

export const ProjectImage = styled.div`
  background: ${(props) => `url(${props.imgURL})` || theme.colours.main};
  background-size: cover;
  height: 200px;
  position: relative;
  width: 100%;

  button {
    bottom: 0;
    position: absolute;
    right: 0;
  }
`;
