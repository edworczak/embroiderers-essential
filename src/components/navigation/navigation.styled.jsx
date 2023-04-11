import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const NavigationWrapper = styled.nav`
  background: ${theme.colours.lightBG};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: ${theme.spacings.navWidth};

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
