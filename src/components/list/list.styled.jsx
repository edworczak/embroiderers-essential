import styled, { css } from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ListWrapper = styled.div`
	gap: ${(props) => (props.$gap ? props.$gap : theme.sizes.spacings.default)};
	display: grid;

	${(props) => {
		switch (props.$maxColumns) {
			case 1:
				return;
			case 2:
				return css`
					@media screen and (min-width: 1072px) {
						grid-template-columns: 1fr 1fr;
					}
				`;
			default:
				return css`
					grid-template-columns: 1fr;
				`;
		}
	}}
`;
