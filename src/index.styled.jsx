import { createGlobalStyle } from "styled-components";

import { theme } from "./shared-styles/theme.styled";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${theme.colours.kashmir};
      color: ${theme.typography.colours.body};
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.default};
        font-weight: ${theme.typography.fontWeight.default};
        margin: 0;
    }
    
    * {
      box-sizing: border-box;
    }
		
		input {
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.fontSize.default};
		}
    
    p {
      margin: 0 0 0;
    }

    h1, h2, h3 {
        font-family: ${theme.typography.fontFamilyCursive};
        font-weight: ${theme.typography.fontWeight.header};
        margin: 0 0 0;
    }
    
    h1, h2 {
      font-family: ${theme.typography.fontFamilyCursive};
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
    
    a {
      color: ${theme.typography.colours.body};
      transition: ${theme.decorations.transition};
				text-decoration: none;
      
      &:hover,
      &:focus {
        color: ${theme.typography.colours.body};
        cursor: pointer;
      }
    }

    button {
      background: transparent;
      border-color: ${theme.typography.colours.link};
      color: ${theme.colours.CTA};
      cursor: pointer;
      font-family: ${theme.typography.fontFamily};
      font-weight: ${theme.typography.fontWeight.bold};
      transition: ${theme.decorations.transition};
      
      path {
        transition: ${theme.decorations.transition};
      }

      &:hover,
      &:focus {
					color: ${theme.typography.colours.linkHover};
        cursor: pointer;
      }
    }
`;
