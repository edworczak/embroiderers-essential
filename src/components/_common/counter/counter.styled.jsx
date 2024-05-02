import styled from "styled-components";
import { theme } from "../../../shared-styles/theme.styled";

export const CounterStyled = styled.div`
	padding: ${theme.sizes.spacings.default} ${theme.sizes.spacings.big};

	span {
			display: block;
			text-align: center;
			width: 100%;
			
			&:nth-child(1) {
          display: inline-block;
          font-family: ${theme.typography.fontFamilyCursive};
          font-size: ${theme.typography.fontSize.h2};
      }
	}
`;