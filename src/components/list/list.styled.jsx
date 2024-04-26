import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ListWrapper = styled.div`
	gap: ${(props) => (props.$gap ? props.$gap : theme.sizes.spacings.default)};
	display: grid;
	grid-template-columns: ${(props) => (props.$columnsGrid ? props.$columnsGrid : "1fr")};
`;
