import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export const StyledHeader = styled.header`
	min-width: 1440px;
	width: 100%;
	min-height: 100%;

	background: linear-gradient(
		to right,
		${theme.colors.secondaryBg} 468px,
		${theme.colors.primaryBg} 468px,
		${theme.colors.primaryBg} 1360px
	);
`
