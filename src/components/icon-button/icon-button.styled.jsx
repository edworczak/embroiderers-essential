import styled, { css } from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const IconButtonStyled = styled.button`
  align-items: center;
  background: transparent;
  border: ${(props) =>
    props.$border ? `1px solid ${theme.colours.CTA}` : "none"};
  color: ${theme.typography.colours.link};
  display: flex;
  height: 50px;
  justify-content: center;
  padding: 14px;
  width: ${(props) => (props.$text ? "auto" : "50px")};

  ${(props) =>
    props.$border &&
    css`
      border-radius: 25px;
      padding: 14px ${theme.sizes.spacings.big};
    `}

  svg {
    height: 100%;
    ${(props) =>
      props.$text ? `margin-left: ${theme.sizes.spacings.small}` : ""};
    width: 100%;
  }
`;
