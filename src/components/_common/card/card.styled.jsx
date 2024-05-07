import styled from "styled-components";

import { theme } from "../../../shared-styles/theme.styled";

export const CardContentStyled = styled.div`
    display: flex;
    width: 100%;

    > a {
        display: flex;
        height: 100%;
        width: 100%;
    }
`;

export const CardInfoStyled = styled.div`
    flex-grow: 1;
    padding: ${theme.sizes.spacings.default};
`;

export const CardThumbnailStyled = styled.div`
    background-position: center;
    background-size: cover;
    border-left: 4px solid ${theme.colours.kashmir};
    border-right: 4px solid ${theme.colours.kashmir};
    height: 100%;
    margin-left: ${theme.sizes.spacings.default};
    overflow: hidden;
    position: relative;
    transition: all 300ms ease-in-out;
    width: 100px;

    @media screen and (${theme.sizes.breakpoints.largeScreenDown}) {
        width: 40px;
    }

    @media screen and (${theme.sizes.breakpoints.oneColumnDown}) {
        width: 100px;
    }

    @media screen and (${theme.sizes.breakpoints.smallestScreenDown}) {
        width: 40px;
    }

    span {
        background: ${theme.palette.darkBackground};
        border-radius: 0 50vh 50vh 0;
        box-shadow: ${theme.decorations.shadow};
        display: inline-block;
        left: -4px;
        padding: ${theme.sizes.spacings.small};
        position: absolute;
        top: ${theme.sizes.spacings.default};
    }
`;

export const CardCTAsWrapperStyled = styled.div`
    display: flex;
    gap: ${theme.sizes.spacings.default};
    justify-content: flex-end;
    min-width: 57px;
    padding: ${theme.sizes.spacings.small};
`;
export const CardStyled = styled.div`
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${(props) => (props.$exactMatch ? "order: -1" : "")};
    overflow: hidden;
    position: relative;
    transition: 300ms;
    width: auto;

    @media screen and (${theme.sizes.breakpoints.mobileDown}) {
        flex-direction: column;
        justify-content: flex-start;
    }

    &:hover {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    }

    > a {
        display: block;
        flex-grow: 1;
        padding: ${theme.sizes.spacings.default};
        position: relative;
        text-decoration: none;
    }

    ${CardCTAsWrapperStyled} {
        border-left: 1px solid ${theme.colours.kashmir};
        flex-direction: column;

        @media screen and (max-width: 600px) {
            border-left: 0;
            border-top: 1px solid ${theme.colours.kashmir};
            flex-direction: row;
        }
    }
`;
