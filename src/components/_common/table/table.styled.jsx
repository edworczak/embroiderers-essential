import styled from "styled-components";

import { theme } from "../../../shared-styles/theme.styled";

export const TableRowStyled = styled.div`
	display: flex;
	gap: ${theme.sizes.spacings.default};
	justify-content: space-between;
`;

export const TableBodyStyled = styled.div`
	display: flex;
	flex-direction: column;
	${(props) => (props.$colourRows ? "" : `gap: ${theme.sizes.spacings.small}`)};

	> div {
		${(props) => (props.$colourRows ? `padding: ${theme.sizes.spacings.default}` : "")};

		&:nth-of-type(2n + 1) {
			${(props) => (props.$colourRows ? `background: ${theme.colours.kashmir}` : "")};
		}
	}
`;
