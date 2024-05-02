import styled from "styled-components";

import { IconButtonWrapper } from "../components/icon-button/icon-button.styled";
import { theme } from "../shared-styles/theme.styled";

export const AppWrapper = styled.div`
	display: flex;
`;

export const Content = styled.div`
	box-sizing: border-box;
	padding-left: 200px;
	width: 100%;

	@media screen and (${theme.sizes.breakpoints.tabletPortraitDown}) {
		padding-left: 50px;
	}
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

	@media screen and (${theme.sizes.breakpoints.mobileDown}) {
		padding: ${theme.sizes.spacings.default};
	}
`;

export const HeadingRow = styled.div`
	align-items: center;
	background-color: ${theme.colours.white};
	display: flex;
	justify-content: space-between;
	padding: ${theme.sizes.spacings.default} ${theme.sizes.spacings.big};

	@media screen and (${theme.sizes.breakpoints.mobileDown}) {
		padding: ${theme.sizes.spacings.default};
	}

	${IconButtonWrapper} {
		@media screen and (${theme.sizes.breakpoints.mobileDown}) {
			a {
				gap: 0;
				padding: ${theme.sizes.spacings.default};
			}

			span {
				font-size: 0;
			}
		}
	}
`;

export const HeadingCTAWrapper = styled.div`
	display: flex;
	gap: ${theme.sizes.spacings.default};
	justify-content: flex-end;
`;

export const HeadingPrimary = styled.h1`
	${(props) => (props.$marginBottom ? `margin-bottom: ${theme.sizes.spacings.default}` : "")};
`;

export const HeadingSecondary = styled.h2`
	margin-bottom: ${theme.sizes.spacings.default};
`;

export const CounterItem = styled.div`
	padding: ${theme.sizes.spacings.default} ${theme.sizes.spacings.big};

	span:nth-child(2) {
		display: inline-block;
		font-family: ${theme.typography.fontFamilyCursive};
		font-size: ${theme.typography.fontSize.h2};
		margin-left: ${theme.sizes.spacings.small};
	}
`;
