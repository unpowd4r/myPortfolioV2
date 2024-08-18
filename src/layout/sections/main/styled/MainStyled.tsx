import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

export const MainSection = styled.section`
	height: 100vh;
	min-width: 1440px;
	background: linear-gradient(
		to right,
		${theme.colors.secondaryBg} 468px,
		${theme.colors.primaryBg} 468px,
		${theme.colors.primaryBg} 1360px
	);
`
