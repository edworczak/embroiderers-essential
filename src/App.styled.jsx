import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { theme } from "./shared-styles/theme.styled";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Medium'), url('https://roboto-webfont.googlecode.com/files/Roboto-Medium-webfont.woff') format('woff');
        font-weight: ${theme.typography.fontWeight.bold};
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto Light'), url('https://roboto-webfont.googlecode.com/files/Roboto-Light-webfont.woff') format('woff');
        font-weight: ${theme.typography.fontWeight.default};
        font-style: normal;
    }

    @font-face {
      font-family: 'Sacramento';
      src: local('Sacramento'), url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
      font-weight: 400;
      font-style: normal;
    }
  
    body {
        background: ${theme.colours.white};
      color: ${theme.typography.colours.body};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.default};
        font-weight: ${theme.typography.fontWeight.default};
        margin: 0;
    }
    
    * {
      box-sizing: border-box;
    }
    
    p {
      margin-bottom: ${theme.sizes.spacings.small};
    }
    
    h1, h2, h3 {
      font-family: ${theme.typography.fontFamilyHeader};
      font-weight: ${theme.typography.fontWeight.header};
      margin: 0 0 ${theme.sizes.spacings.default};
    }
    
    h1 {
      font-size: ${theme.typography.fontSize.h1};
    }

    h2 {
      font-size: ${theme.typography.fontSize.h2};
    }

    h3 {
      font-size: ${theme.typography.fontSize.h3};
    }
`;

export const AppWrapper = styled.div`
  display: flex;
  padding-left: ${theme.sizes.spacings.navWidth};
`;

export const Content = styled.div`
  padding: ${theme.sizes.spacings.big};
  width: 100%;
`;

export const Section = styled.section`
  margin-bottom: ${theme.sizes.spacings.default};
  width: 100%;
`;
