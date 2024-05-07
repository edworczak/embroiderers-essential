import styled, { css } from "styled-components";

import { theme } from "../../../shared-styles/theme.styled";

export const TableRowStyled = styled.div`
    display: flex;
    gap: ${theme.sizes.spacings.default};
    justify-content: ${(props) => (props.$summary ? "flex-end" : "space-between")};

    ${(props) =>
        props.$summary &&
        css`
            background: transparent !important;
            border-top: 4px solid ${theme.palette.darkBackground};
            margin-top: 16px;
            padding-top: 16px;
            span {
                font-family: ${theme.typography.fontFamilyCursive};
                font-size: ${theme.typography.fontSize.h3};
            }
        `}
`;

export const TableBodyStyled = styled.div`
    display: flex;
    flex-direction: column;
    ${(props) => (props.$colourRows ? "" : `gap: ${theme.sizes.spacings.small}`)};

    > div {
        ${(props) => (props.$colourRows ? `padding: ${theme.sizes.spacings.small}` : "")};

        &:nth-of-type(2n + 1) {
            ${(props) => (props.$colourRows ? `background: ${theme.colours.kashmir}` : "")};
        }
    }
`;
