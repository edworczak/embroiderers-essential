import styled, { css } from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ProjectHeader = styled.div`
    background-color: ${theme.colours.white};
    display: flex;
    gap: 0;

    @media screen and (${theme.sizes.breakpoints.mobileDown}) {
        flex-direction: column-reverse;
    }
`;
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const ProjectImageWrapper = styled.div`
    aspect-ratio: 1 / 1;
    font-size: 0;
    max-height: 500px;

    img {
        aspect-ratio: 1 / 1;
        height: 100%;
        object-fit: cover;
        width: 100%;
    }

    ${(props) =>
        props.$placeholderImage
            ? css`
                  @media screen and (${theme.sizes.breakpoints.mobileDown}) {
                      display: none;
                  }
              `
            : ""}
`;
