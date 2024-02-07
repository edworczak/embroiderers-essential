import styled from "styled-components";

import { theme } from "../../shared-styles/theme.styled";

export const ListWrapper = styled.div`
	align-items: ${(props) => (props.$center ? "center" : "stretch")};
	display: flex;
	flex-direction: ${(props) => (props.$column ? "column" : "row")};
	flex-wrap: ${(props) => (props.$scroll ? "nowrap" : "wrap")};
	gap: ${(props) => (props.$gap ? props.$gap : theme.sizes.spacings.default)};
	${(props) => (props.$scroll ? `margin: 0 -${theme.sizes.spacings.big}` : "")};
	${(props) => (props.$scroll ? "overflow-x: auto" : "")};
	${(props) => (props.$scroll ? `padding: 0 ${theme.sizes.spacings.big}` : "")};
`;
