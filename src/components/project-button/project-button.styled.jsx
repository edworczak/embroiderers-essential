import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectButtonStyled = styled.a`
  background: ${theme.colours.kashmir};
  border-radius: ${theme.decorations.borderRadiusDefault};
  flex-shrink: 0;
  margin: ${theme.sizes.spacings.default};
  overflow: hidden;
  width: 200px;
`;

export const ProjectImage = styled.div`
  background: ${(props) => `url(${props.imgURL})` || theme.colours.kashmir};
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

export const ProjectTitle = styled.h3`
  margin: ${theme.sizes.spacings.small};
`;
