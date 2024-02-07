import styled from "styled-components";

import { theme } from "../shared-styles/theme.styled";

export const AppWrapper = styled.div`
	display: flex;
`;

export const Content = styled.div`
	width: 100%;
`;

export const Section = styled.section`
	margin-bottom: ${theme.sizes.spacings.big};
	width: 100%;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Row = styled.div`
	${(props) => (props.$border ? `border-bottom: 1px solid ${props.$border}` : "")};
	${(props) => (props.$align ? `align-items: ${props.$align}` : "")};
	background: ${(props) => (props.$background ? props.$background : "transparent")};
	display: ${(props) => (props.$useFlex ? "flex" : "block")};
	flex-direction: ${(props) => (props.$column ? "column" : "row")};
	${(props) => (props.$justify ? `justify-content: ${props.$justify}` : "")};
	padding: ${theme.sizes.spacings.default} ${theme.sizes.spacings.big};
	width: 100%;
`;
