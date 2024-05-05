import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";
import { RowStyled } from "../_common/layout/layout.styled";

export const LoginWrapperStyled = styled.div`
		align-items: center;
		display: flex;
	height: 100vh;
		justify-content: center;
	width: 100%;
		
		h1 {
				font-size: 60px;
				line-height: 0.9em;
				margin-bottom: ${theme.sizes.spacings.big};
				text-align: center;
		}
		
		label {
				text-align: center;
		}
		
		${RowStyled} {
				margin: 0 auto;
				max-width: 300px;
		}
`;