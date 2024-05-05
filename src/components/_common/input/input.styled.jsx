import styled from "styled-components";

import { theme } from "../../../shared-styles/theme.styled";

export const InputWrapperStyled = styled.div`
	align-items: ${(props) => (props.$checkbox ? "center" : "skretch")};
	display: flex;
	flex-direction: ${(props) => (props.$checkbox ? "row" : "column-reverse")};
	gap: ${theme.sizes.spacings.small};
	position: relative;
`;

export const InputLabelStyled = styled.label`
	display: block;
`;

export const CheckboxStyled = styled.div`
	align-items: center;
	background: ${theme.palette.darkBackground};
	border-radius: 50vh;
	display: flex;
	height: 40px;
	justify-content: center;
	padding: ${theme.sizes.spacings.small};
	width: 40px;

	svg {
		opacity: 0;
		transition: opacity 300ms ease-in-out;
	}
`;

export const InputStyled = styled.input`
	background: ${theme.palette.darkBackground};
	border: 0;
	border-radius: 50vh;
	min-height: 40px;
	padding: ${theme.sizes.spacings.default};

	&[type="checkbox"] {
		height: 100%;
		opacity: 0;
		position: absolute;
		width: 100%;

		&:checked + div svg {
			opacity: 1;
		}
	}

	&:hover {
		box-shadow: ${theme.decorations.shadow};
	}
`;
