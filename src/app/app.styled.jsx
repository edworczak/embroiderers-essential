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
	background: ${(props) => (props.$background ? props.$background : "transparent")};
	padding: ${theme.sizes.spacings.default} ${theme.sizes.spacings.big};
	width: 100%;
`;
