import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export const StyledHeader = styled.header`
	min-height: 100%;

	padding-bottom: 78px;

	background: linear-gradient(
		to right,
		${theme.colors.secondaryBg} min(50vw, 468px),
		${theme.colors.primaryBg} min(50vw, 468px),
		${theme.colors.primaryBg} 1360px
	);

	@media ${theme.media.tablet} {
		display: flex;
		align-items: center;
		padding: 0;
		max-height: 75px;
		background: none;
		background-color: ${theme.colors.primaryBg};
	}

	@media ${theme.media.mobile} {
		display: flex;
		align-items: center;
		padding: 0;
		max-height: 42px;
		background: none;
		background-color: ${theme.colors.primaryBg};

		font-weight: 400;
		font-size: 8px;
	}
`
