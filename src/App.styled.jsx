import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { theme } from "./shared-styles/theme.styled";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Medium'), url('https://roboto-webfont.googlecode.com/files/Roboto-Medium-webfont.woff') format('woff');
        font-weight: ${theme.typography.weight.bold};
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Light'), url('https://roboto-webfont.googlecode.com/files/Roboto-Light-webfont.woff') format('woff');
        font-weight: ${theme.typography.weight.default};
        font-style: normal;
    }
  
    body {
        background: ${theme.background};
        font-family: ${theme.typography.font};
        font-size: ${theme.typography.fontSize.default};
        font-weight: ${theme.typography.weight.default};
        margin: 0;
    }
    
    * {
      box-sizing: border-box;
    }
    
    h1 {
      font-size: ${theme.typography.fontSize.h1};
      font-weight: ${theme.typography.weight.bold};
      margin: 0 0 ${theme.spacings.default};
    }

    h2 {
      font-size: ${theme.typography.fontSize.h2};
      font-weight: ${theme.typography.weight.bold};
      margin: 0 0 ${theme.spacings.default};
    }

    h3 {
      font-size: ${theme.typography.fontSize.h3};
      font-weight: ${theme.typography.weight.bold};
      margin: 0 0 ${theme.spacings.default};
    }
`;

export const AppWrapper = styled.div`
  display: flex;
  padding-left: ${theme.spacings.navWidth};
`;

export const Content = styled.div`
  padding: ${theme.spacings.big};
  width: 100%;
`;

export const Section = styled.section`
  margin-bottom: ${theme.spacings.default};
  width: 100%;
`;
