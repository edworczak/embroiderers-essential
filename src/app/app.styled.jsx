import styled from "styled-components";

import { theme } from "../shared-styles/theme.styled";

export const AppWrapper = styled.div`
	display: flex;
`;

export const Content = styled.div`
	padding: ${theme.sizes.spacings.big};
	width: 100%;
`;

export const Section = styled.section`
	margin-bottom: ${theme.sizes.spacings.big};
	width: 100%;
`;

export const Column = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Row = styled.section`
	display: flex;
	flex-direction: row;
	gap: ${theme.sizes.spacings.big};
	width: 100%;
`;
