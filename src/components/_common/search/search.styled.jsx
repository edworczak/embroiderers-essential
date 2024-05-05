import styled from "styled-components";
import { theme } from "../../../shared-styles/theme.styled";
import { InputStyled, InputWrapperStyled } from "../input/input.styled";
import { RowStyled } from "../layout/layout.styled";

export const SearchWrapperStyled = styled(RowStyled)`
		${InputWrapperStyled} {
				align-items: center;
				flex-direction: row-reverse;
				gap: ${theme.sizes.spacings.big};
				justify-content: flex-start;
		}
		
		${InputStyled} {
				flex-grow: 1;
				height: 40px;
		}
`;