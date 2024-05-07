import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ListScrollWrapper = styled.div`
    margin: 0 -${theme.sizes.spacings.big};
    overflow-x: auto;
    width: calc(100% + (2 * ${theme.sizes.spacings.big}));
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 ${theme.sizes.spacings.default};
    width: auto;
`;
