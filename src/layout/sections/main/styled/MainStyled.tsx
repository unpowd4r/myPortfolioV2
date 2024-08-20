import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

export const MainSection = styled.section`
	min-height: 838px;
	background: linear-gradient(
		to right,
		${theme.colors.secondaryBg} min(50vw, 468px),
		${theme.colors.primaryBg} min(50vw, 468px),
		${theme.colors.primaryBg} 1360px
	);
`
