import styled from "styled-components";

import { theme } from "../../../shared-styles/theme.styled";
import { IconButtonWrapper } from "../icon-button/icon-button.styled";

export const AppWrapper = styled.div`
    display: flex;
`;

export const Content = styled.div`
    box-sizing: border-box;
    padding-left: 200px;
    width: 100%;

    @media screen and (${theme.sizes.breakpoints.tabletPortraitDown}) {
        padding-left: 50px;
    }
`;

export const RowBaseStyled = styled.div`
    background: ${(props) => (props.$lightBackground ? theme.palette.lightBackground : theme.palette.darkBackground)};
    display: flex;
    gap: ${theme.sizes.spacings.default};
    padding: ${theme.sizes.spacings.default} ${theme.sizes.spacings.big};
    width: 100%;

    @media screen and (${theme.sizes.breakpoints.mobileDown}) {
        padding: ${theme.sizes.spacings.default};
    }
`;

export const HeadingRowStyled = styled(RowBaseStyled)`
    align-items: center;
    background: ${(props) => (props.$secondary ? "transparent" : theme.palette.lightBackground)};
    flex-direction: row;
    justify-content: space-between;
    ${(props) => (props.$secondary ? "padding: 0 !important" : "")};

    ${IconButtonWrapper} {
        @media screen and (${theme.sizes.breakpoints.mobileDown}) {
            a {
                gap: 0;
                padding: ${theme.sizes.spacings.default};
            }

            span {
                font-size: 0;
            }
        }
    }
`;

export const RowStyled = styled(RowBaseStyled)`
    ${(props) => (props.$contentInRow ? "align-items: center" : "")};
    flex-direction: ${(props) => (props.$contentInRow ? "row" : "column")};
    ${(props) => (props.$contentCentered ? "justify-content: center" : "")};
    ${(props) => (props.$contentToEnd ? "justify-content: flex-end" : "")};
    ${(props) => (props.$contentToEnd ? "margin-top: auto" : "")};
    flex-wrap: wrap;
`;

export const RowContentCenteredStyled = styled(RowBaseStyled)`
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const RowContentRightStyled = styled(RowBaseStyled)`
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
`;

export const HeadingPrimaryStyled = styled.h1`
    ${(props) => (props.$marginBottom ? `margin-bottom: ${theme.sizes.spacings.default}` : "")};
`;

export const HeadingSecondaryStyled = styled.h2`
    margin-bottom: 0;
`;
